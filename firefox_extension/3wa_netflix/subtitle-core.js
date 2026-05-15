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

    return {
        createStorageKey: createStorageKey,
        decodeHtml: decodeHtml,
        findCueText: findCueText,
        htmlToSubtitleText: htmlToSubtitleText,
        isSubtitleXml: isSubtitleXml,
        parseSubtitleXml: parseSubtitleXml,
        parseTimeToSeconds: parseTimeToSeconds
    };
});
