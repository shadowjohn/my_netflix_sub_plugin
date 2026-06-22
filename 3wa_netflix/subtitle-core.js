(function (root, factory) {
    var core = factory();
    if (typeof module === 'object' && module.exports) {
        module.exports = core;
    }
    root.myNetflixSubtitleCore = core;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    'use strict';

    function decodeHtml(text) {
        if (text == null) return '';
        var value = String(text);
        if (typeof document !== 'undefined' && document.createElement) {
            var textarea = document.createElement('textarea');
            textarea.innerHTML = value;
            return textarea.value;
        }
        return value
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
    }

    function parseTimeToSeconds(value) {
        if (value == null) return null;
        var raw = String(value).trim();
        if (raw === '') return null;

        if (/^-?\d+(\.\d+)?t?$/.test(raw)) {
            var ticks = parseFloat(raw.replace(/t$/, ''));
            if (!isFinite(ticks)) return null;
            return Math.abs(ticks) >= 1000000 ? ticks / 10000000 : ticks;
        }

        if (/^-?\d+(\.\d+)?ms$/.test(raw)) {
            return parseFloat(raw.replace(/ms$/, '')) / 1000;
        }

        if (/^-?\d+(\.\d+)?s$/.test(raw)) {
            return parseFloat(raw.replace(/s$/, ''));
        }

        var clock = raw.match(/^(\d+):(\d{2}):(\d{2})(?:[.,](\d+))?$/);
        if (clock) {
            var ms = clock[4] ? parseFloat('0.' + clock[4]) : 0;
            return parseInt(clock[1], 10) * 3600 + parseInt(clock[2], 10) * 60 + parseInt(clock[3], 10) + ms;
        }

        return null;
    }

    function readAttributes(attrText) {
        var attrs = {};
        String(attrText || '').replace(/([\w:-]+)\s*=\s*["']([^"']*)["']/g, function (_, key, value) {
            attrs[key] = value;
            return '';
        });
        return attrs;
    }

    function htmlToSubtitleText(html) {
        var text = String(html || '')
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/(?:span|p|div)>/gi, '')
            .replace(/<[^>]+>/g, '');
        text = decodeHtml(text);
        return text
            .split('\n')
            .map(function (line) { return line.trim(); })
            .filter(function (line) { return line !== ''; })
            .join('\n')
            .trim();
    }

    function isSubtitleXml(xmlSource) {
        if (typeof xmlSource !== 'string') return false;
        if (!/<(?:[\w-]+:)?p\b/i.test(xmlSource)) return false;
        return xmlSource.indexOf('<tt') !== -1 ||
            xmlSource.indexOf('tts:') !== -1 ||
            xmlSource.indexOf('xml:lang') !== -1 ||
            xmlSource.indexOf('begin=') !== -1;
    }

    function parseSubtitleXml(xmlSource) {
        if (!isSubtitleXml(xmlSource)) return [];

        var cues = [];
        var pRegex = /<(?:[\w-]+:)?p\b([^>]*)>([\s\S]*?)<\/(?:[\w-]+:)?p>/gi;
        var match;

        while ((match = pRegex.exec(xmlSource)) !== null) {
            var attrs = readAttributes(match[1]);
            var start = parseTimeToSeconds(attrs.begin);
            var end = parseTimeToSeconds(attrs.end);
            var dur = parseTimeToSeconds(attrs.dur);
            var text = htmlToSubtitleText(match[2]);

            if (start == null || (end == null && dur == null) || text === '') continue;
            if (end == null) end = start + dur;
            if (end < start) continue;

            cues.push({
                start: start,
                end: end,
                text: text
            });
        }

        cues.sort(function (a, b) {
            return a.start - b.start || a.end - b.end;
        });
        return cues;
    }

    function findCueText(cues, seconds) {
        if (!Array.isArray(cues) || cues.length === 0) return null;
        if (seconds == null || !isFinite(seconds)) return null;

        var left = 0;
        var right = cues.length - 1;

        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            var cue = cues[mid];

            if (seconds < cue.start) {
                right = mid - 1;
            }
            else if (seconds > cue.end) {
                left = mid + 1;
            }
            else {
                return cue.text;
            }
        }

        return null;
    }

    function createStorageKey(movieId, subtitleName) {
        if (movieId == null || subtitleName == null) return null;
        return 'my_netflix___SUB[' + String(movieId).trim() + '][' + String(subtitleName).trim() + ']';
    }

    var HISTORY_DEFAULT_LIMIT = 50;
    var HISTORY_ENTRY_DURATION_MS = 1800;
    var HISTORY_PAIR_WINDOW_MS = 1200;
    var HISTORY_DUPLICATE_WINDOW_MS = 4000;
    var HISTORY_RECENT_SCAN_COUNT = 6;

    function normalizeSubtitleHistoryText(value) {
        if (value == null) return '';
        return String(value)
            .replace(/\s+/g, ' ')
            .trim();
    }

    function normalizeHistoryLimit(limit) {
        limit = parseInt(limit, 10);
        if (!isFinite(limit) || limit <= 0) return HISTORY_DEFAULT_LIMIT;
        return limit;
    }

    function createSubtitleHistoryState(limit) {
        return {
            limit: normalizeHistoryLimit(limit),
            rows: []
        };
    }

    function isSameHistoryText(row, mainText, subText) {
        return normalizeSubtitleHistoryText(row.mainText) === mainText &&
            normalizeSubtitleHistoryText(row.subText) === subText;
    }

    function isNearHistoryTime(row, currentMs, windowMs) {
        return Math.abs(currentMs - row.startMs) <= windowMs ||
            Math.abs(currentMs - row.endMs) <= windowMs ||
            (currentMs >= row.startMs - windowMs && currentMs <= row.endMs + windowMs);
    }

    function canPairHistoryRow(row, mainText, subText, currentMs) {
        if (!isNearHistoryTime(row, currentMs, HISTORY_PAIR_WINDOW_MS)) return false;

        var rowMain = normalizeSubtitleHistoryText(row.mainText);
        var rowSub = normalizeSubtitleHistoryText(row.subText);
        var canFillMain = mainText !== '' && rowMain === '' && (subText === '' || rowSub === '' || rowSub === subText);
        var canFillSub = subText !== '' && rowSub === '' && (mainText === '' || rowMain === '' || rowMain === mainText);

        return canFillMain || canFillSub;
    }

    function updateHistoryRow(row, mainText, subText, currentMs) {
        if (mainText !== '' && normalizeSubtitleHistoryText(row.mainText) === '') row.mainText = mainText;
        if (subText !== '' && normalizeSubtitleHistoryText(row.subText) === '') row.subText = subText;
        row.startMs = Math.min(row.startMs, currentMs);
        row.endMs = Math.max(row.endMs, currentMs + HISTORY_ENTRY_DURATION_MS);
        return row;
    }

    function trimSubtitleHistoryRows(state) {
        while (state.rows.length > state.limit) {
            var oldestIndex = 0;
            for (var i = 1, max = state.rows.length; i < max; i++) {
                if (state.rows[i].insertedAt < state.rows[oldestIndex].insertedAt) {
                    oldestIndex = i;
                }
            }
            state.rows.splice(oldestIndex, 1);
        }
    }

    function createHistoryId(movieId, currentMs, mainText, subText) {
        return [
            String(movieId || ''),
            String(Math.max(0, parseInt(currentMs, 10) || 0)),
            String(mainText || '').length,
            String(subText || '').length
        ].join(':');
    }

    function recordSubtitleHistory(state, input) {
        if (state == null) state = createSubtitleHistoryState();
        if (!Array.isArray(state.rows)) state.rows = [];
        state.limit = normalizeHistoryLimit(state.limit);

        input = input || {};
        var movieId = normalizeSubtitleHistoryText(input.movieId);
        var currentMs = Math.max(0, parseInt(input.currentMs, 10) || 0);
        var nowMs = input.nowMs == null ? Date.now() : parseInt(input.nowMs, 10);
        if (!isFinite(nowMs)) nowMs = Date.now();

        var mainText = normalizeSubtitleHistoryText(input.mainText);
        var subText = normalizeSubtitleHistoryText(input.subText);
        if (mainText === '' && subText === '') return null;

        for (var i = state.rows.length - 1; i >= 0; i--) {
            var row = state.rows[i];
            if (movieId !== '' && row.movieId !== movieId) continue;

            if (isSameHistoryText(row, mainText, subText) && isNearHistoryTime(row, currentMs, HISTORY_DUPLICATE_WINDOW_MS)) {
                return updateHistoryRow(row, mainText, subText, currentMs);
            }

            if (canPairHistoryRow(row, mainText, subText, currentMs)) {
                return updateHistoryRow(row, mainText, subText, currentMs);
            }
        }

        var minRecentIndex = Math.max(0, state.rows.length - HISTORY_RECENT_SCAN_COUNT);
        for (var recentIndex = state.rows.length - 1; recentIndex >= minRecentIndex; recentIndex--) {
            var recentRow = state.rows[recentIndex];
            if (movieId !== '' && recentRow.movieId !== movieId) continue;
            if (isSameHistoryText(recentRow, mainText, subText) && isNearHistoryTime(recentRow, currentMs, HISTORY_DUPLICATE_WINDOW_MS)) {
                return updateHistoryRow(recentRow, mainText, subText, currentMs);
            }
        }

        var newRow = {
            id: createHistoryId(movieId, currentMs, mainText, subText),
            movieId: movieId,
            startMs: currentMs,
            endMs: currentMs + HISTORY_ENTRY_DURATION_MS,
            insertedAt: nowMs,
            mainText: mainText,
            subText: subText
        };
        state.rows.push(newRow);
        trimSubtitleHistoryRows(state);
        return newRow;
    }

    function cloneHistoryRow(row) {
        return {
            id: row.id,
            movieId: row.movieId,
            startMs: row.startMs,
            endMs: row.endMs,
            insertedAt: row.insertedAt,
            mainText: row.mainText,
            subText: row.subText
        };
    }

    function getSubtitleHistoryRows(state) {
        if (state == null || !Array.isArray(state.rows)) return [];
        return state.rows
            .map(cloneHistoryRow)
            .sort(function (a, b) {
                return a.startMs - b.startMs || a.endMs - b.endMs || a.insertedAt - b.insertedAt;
            });
    }

    function searchSubtitleHistoryRows(rows, query) {
        var normalizedQuery = normalizeSubtitleHistoryText(query).toLowerCase();
        if (normalizedQuery === '' || !Array.isArray(rows)) return [];
        var result = [];
        for (var i = 0, max = rows.length; i < max; i++) {
            var haystack = normalizeSubtitleHistoryText((rows[i].mainText || '') + ' ' + (rows[i].subText || '')).toLowerCase();
            if (haystack.indexOf(normalizedQuery) !== -1) result.push(i);
        }
        return result;
    }

    function formatSubtitleHistoryTime(ms) {
        if (ms == null || !isFinite(ms)) return '00:00:00,000';
        var totalMs = Math.max(0, parseInt(ms, 10) || 0);
        var hour = Math.floor(totalMs / 3600000);
        totalMs -= hour * 3600000;
        var minute = Math.floor(totalMs / 60000);
        totalMs -= minute * 60000;
        var second = Math.floor(totalMs / 1000);
        totalMs -= second * 1000;
        return String(hour).padStart(2, '0') + ':' +
            String(minute).padStart(2, '0') + ':' +
            String(second).padStart(2, '0') + ',' +
            String(totalMs).padStart(3, '0');
    }

    return {
        createSubtitleHistoryState: createSubtitleHistoryState,
        createStorageKey: createStorageKey,
        decodeHtml: decodeHtml,
        findCueText: findCueText,
        formatSubtitleHistoryTime: formatSubtitleHistoryTime,
        getSubtitleHistoryRows: getSubtitleHistoryRows,
        htmlToSubtitleText: htmlToSubtitleText,
        isSubtitleXml: isSubtitleXml,
        normalizeSubtitleHistoryText: normalizeSubtitleHistoryText,
        parseSubtitleXml: parseSubtitleXml,
        parseTimeToSeconds: parseTimeToSeconds,
        recordSubtitleHistory: recordSubtitleHistory,
        searchSubtitleHistoryRows: searchSubtitleHistoryRows
    };
});
