# Subtitle History Sidebar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 `v3.6.8` 加回右側「歷史字幕 / Subtitle History」浮動視窗，只收 live 顯示過的字幕句子，最多保留 50 筆。

**Architecture:** 純資料邏輯放在 `3wa_netflix/subtitle-core.js`，用 Node 測試鎖定合併、去重、FIFO、搜尋行為。`3wa_netflix/background.js` 只負責從 `lastWord_a` / `lastWord_b` 收集、建立 sidebar DOM、處理搜尋、自動捲動與保守版跳轉。

**Tech Stack:** Chrome Extension Manifest V3、jQuery 3.7.1、plain JavaScript、Node `assert` 測試、PowerShell 7 / `pwsh`。

---

### Task 1: Add Failing Subtitle History Core Tests

**Files:**
- Create: `test/subtitle-history.test.js`
- Modify: none

- [ ] **Step 1: Write the failing test**

Create `test/subtitle-history.test.js` with:

```js
const assert = require('node:assert/strict');
const core = require('../3wa_netflix/subtitle-core.js');

assert.equal(core.normalizeSubtitleHistoryText(null), '');
assert.equal(core.normalizeSubtitleHistoryText('  Hello\\n  world  '), 'Hello world');

const state = core.createSubtitleHistoryState(3);

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 1000,
  nowMs: 100,
  mainText: '第一句',
  subText: ''
});

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 1600,
  nowMs: 200,
  mainText: '',
  subText: 'First line'
});

let rows = core.getSubtitleHistoryRows(state);
assert.equal(rows.length, 1);
assert.equal(rows[0].mainText, '第一句');
assert.equal(rows[0].subText, 'First line');
assert.equal(rows[0].startMs, 1000);
assert.ok(rows[0].endMs >= 3400);

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 2200,
  nowMs: 300,
  mainText: '第一句',
  subText: 'First line'
});

rows = core.getSubtitleHistoryRows(state);
assert.equal(rows.length, 1);
assert.ok(rows[0].endMs >= 4000);

core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 7000,
  nowMs: 400,
  mainText: '第二句',
  subText: 'Second line'
});
core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 5000,
  nowMs: 500,
  mainText: '插入較早時間',
  subText: 'Earlier timeline'
});
core.recordSubtitleHistory(state, {
  movieId: 'movie-a',
  currentMs: 9000,
  nowMs: 600,
  mainText: '第三句',
  subText: 'Third line'
});

rows = core.getSubtitleHistoryRows(state);
assert.equal(rows.length, 3);
assert.deepEqual(rows.map(row => row.mainText), ['插入較早時間', '第二句', '第三句']);
assert.equal(rows.some(row => row.mainText === '第一句'), false);

const matches = core.searchSubtitleHistoryRows(rows, 'third');
assert.deepEqual(matches, [2]);
assert.deepEqual(core.searchSubtitleHistoryRows(rows, '第二'), [1]);
assert.deepEqual(core.searchSubtitleHistoryRows(rows, ''), []);

assert.equal(core.formatSubtitleHistoryTime(3723400), '01:02:03,400');

console.log('subtitle history tests passed');
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
node test\subtitle-history.test.js
```

Expected: FAIL with `TypeError: core.normalizeSubtitleHistoryText is not a function`.

- [ ] **Step 3: Commit is not allowed yet**

Do not commit after the red test. Continue to Task 2.

---

### Task 2: Implement Subtitle History Core Helpers

**Files:**
- Modify: `3wa_netflix/subtitle-core.js`
- Test: `test/subtitle-history.test.js`

- [ ] **Step 1: Add constants and helpers before the final `return`**

In `3wa_netflix/subtitle-core.js`, add these functions after `createStorageKey` and before `return { ... }`:

```js
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
```

- [ ] **Step 2: Export the new helpers**

Add these properties to the returned object in `3wa_netflix/subtitle-core.js`:

```js
        createSubtitleHistoryState: createSubtitleHistoryState,
        formatSubtitleHistoryTime: formatSubtitleHistoryTime,
        getSubtitleHistoryRows: getSubtitleHistoryRows,
        normalizeSubtitleHistoryText: normalizeSubtitleHistoryText,
        recordSubtitleHistory: recordSubtitleHistory,
        searchSubtitleHistoryRows: searchSubtitleHistoryRows,
```

- [ ] **Step 3: Run the subtitle history test**

Run:

```powershell
node test\subtitle-history.test.js
```

Expected: PASS with `subtitle history tests passed`.

- [ ] **Step 4: Run existing core tests**

Run:

```powershell
node test\subtitle-core.test.js
```

Expected: PASS with `subtitle-core tests passed`.

- [ ] **Step 5: Commit**

Run:

```powershell
git add 3wa_netflix\subtitle-core.js test\subtitle-history.test.js
git commit -m "feat: add subtitle history core state"
```

---

### Task 3: Add Sidebar Settings, State, And CSS

**Files:**
- Modify: `3wa_netflix/background.js`
- Test: existing Node tests after edit

- [ ] **Step 1: Add `data` state under `appClass`**

In `3wa_netflix/background.js`, after the existing `"doms": { }` object, add:

```js
        },
        "data": {
            subtitleHistoryState: null,
            subtitleHistoryRows: [],
            subtitleHistoryHtml: null,
            subtitleHistoryActiveIndex: null,
            subtitleHistoryUserScrollUntil: 0,
            subtitleHistoryAutoScroll: true,
            subtitleHistorySearchText: '',
            subtitleHistorySearchMatches: []
        }
```

- [ ] **Step 2: Add setting default**

In `_myNetFlixSettings`, after `my_netflix_auto_fix_cc`, change the ending to:

```js
        'my_netflix_auto_fix_english_first_letter_case': { 'default': 'false' }, //自動修正英文 CC 字幕，首字大寫，後面都改小寫
        'my_netflix_auto_fix_cc': { 'default': 'false' }, //(可選擇) 自動移除 CC 字幕 [內容]，句首、句尾「-」號
        'my_netflix_auto_history_sidebar': { 'default': 'true' } //歷史字幕 Sidebar
```

- [ ] **Step 3: Add auto-function checkbox row**

In the auto-function table after the `my_netflix_auto_fix_cc` row, insert:

```html
                        <tr> \
                            <td field='項次' style='text-align:center; width:50px;'> \
                                <input type='checkbox' reqc='my_netflix_auto_history_sidebar' class='checkbox_class'> \
                            </td> \
                            <td field='內容' style='padding-left:3px;'> \
                                <span class='my_netflix_auto_title_span'>歷史字幕 / Subtitle History</span><br>控制右側歷史字幕面板是否啟用。關閉後不會顯示，也不再收集字幕內容。</td> \
                        </tr> \
```

- [ ] **Step 4: Set checkbox initial value**

After existing auto checkbox `.prop("checked", ...)` calls, add:

```js
    $("input[reqc='my_netflix_auto_history_sidebar']").prop("checked", (window['my_netflix_auto_history_sidebar'] == "false") ? false : true);
```

- [ ] **Step 5: Add sidebar CSS to existing `<style reqc='s'>`**

Before `</style>` of the main injected style block, add CSS for these selectors:

```css
  div[reqc='my_netflix_history_sidebar']{position:fixed;top:10px;right:0;bottom:14%;width:360px;z-index:2147483640;display:none;color:#fff;background:linear-gradient(180deg,rgba(6,18,44,0.94) 0%,rgba(5,13,34,0.96) 100%);border:1px solid rgba(74,198,255,0.72);border-radius:18px 0 0 18px;box-shadow:0 0 0 1px rgba(90,220,255,0.16) inset,0 22px 52px rgba(0,0,0,0.42);overflow:hidden;pointer-events:auto;user-select:text;-webkit-user-select:text;transform:translateX(calc(100% - 22px));opacity:0.08;transition:transform 0.24s ease,opacity 0.24s ease;}
  div[reqc='my_netflix_history_sidebar'].my_netflix_history_sidebar_show{transform:translateX(0);opacity:1;}
  div[reqc='my_netflix_history_sidebar_header']{padding:12px 12px 8px 14px;font-size:14px;font-weight:bold;color:#8fe7ff;border-bottom:1px solid rgba(100,211,255,0.18);background:rgba(74,175,255,0.12);display:flex;align-items:center;justify-content:space-between;gap:8px;}
  div[reqc='my_netflix_history_sidebar_title']{flex:1;min-width:0;}
  div[reqc='my_netflix_history_sidebar_actions']{display:flex;align-items:center;gap:6px;}
  button[reqc='my_netflix_history_autoscroll'],button[reqc='my_netflix_history_close']{width:28px;height:28px;border-radius:999px;border:1px solid rgba(117,223,255,0.42);background:rgba(12,34,72,0.72);color:#95e9ff;cursor:pointer;font-size:13px;line-height:1;}
  button[reqc='my_netflix_history_autoscroll'][data-enabled='YES']{background:linear-gradient(180deg,rgba(36,125,255,0.72),rgba(45,203,255,0.42));color:#fff;border-color:rgba(149,240,255,0.88);}
  div[reqc='my_netflix_history_search']{padding:10px 12px;border-bottom:1px solid rgba(100,211,255,0.12);}
  input[reqc='my_netflix_history_search_input']{width:100%;box-sizing:border-box;border-radius:10px;border:1px solid rgba(117,223,255,0.35);background:rgba(0,0,0,0.22);color:#fff;padding:7px 9px;font-size:13px;outline:none;}
  div[reqc='my_netflix_history_sidebar_body']{height:calc(100% - 96px);overflow-y:auto;padding:14px 12px 42vh 12px;box-sizing:border-box;scroll-behavior:smooth;user-select:text;-webkit-user-select:text;scrollbar-width:thin;scrollbar-color:rgba(101,225,255,0.82) rgba(7,22,52,0.55);}
  div[reqc='my_netflix_history_row']{padding:10px 12px;margin-bottom:10px;border-radius:14px;background:rgba(255,255,255,0.04);border:1px solid rgba(113,196,255,0.08);white-space:pre-wrap;word-break:break-word;cursor:pointer;}
  div[reqc='my_netflix_history_row'].my_netflix_history_row_active{border-color:rgba(149,240,255,0.88);background:rgba(62,154,255,0.18);}
  div[reqc='my_netflix_history_row'].my_netflix_history_row_match{box-shadow:0 0 0 1px rgba(255,230,115,0.55) inset;}
  div[reqc='my_netflix_history_time']{color:rgba(151,227,255,0.72);font-size:11px;margin-bottom:6px;font-family:Consolas,Monaco,monospace;}
  div[reqc='my_netflix_history_text_main']{font-size:16px;line-height:1.5;color:#ffffff;}
  div[reqc='my_netflix_history_text_sub']{font-size:14px;line-height:1.5;color:rgba(198,232,255,0.9);margin-top:7px;}
  div[reqc='my_netflix_history_empty']{padding:18px 14px;color:rgba(169,224,255,0.78);font-size:13px;line-height:1.5;text-align:center;}
```

- [ ] **Step 6: Run existing tests**

Run:

```powershell
node test\subtitle-core.test.js
node test\font-download-links.test.js
```

Expected: both PASS.

Do not commit yet; Task 4 completes the UI wiring.

---

### Task 4: Wire Sidebar DOM, Collection, Search, Auto Scroll, And Seek

**Files:**
- Modify: `3wa_netflix/background.js`
- Test: existing Node tests and manual browser check

- [ ] **Step 1: Add helper methods in `appClass.method`**

Before `cleanXMLSubs: function ()`, add methods with these names and behavior:

```js
            getSubtitleHistoryCore: function () {
                return window.myNetflixSubtitleCore || null;
            },
            ensureSubtitleHistoryState: function () {
                var core = appClass.method.getSubtitleHistoryCore();
                if (core == null || typeof (core.createSubtitleHistoryState) != "function") return null;
                if (appClass.data.subtitleHistoryState == null) {
                    appClass.data.subtitleHistoryState = core.createSubtitleHistoryState(50);
                }
                return appClass.data.subtitleHistoryState;
            },
            clearSubtitleHistory: function () {
                appClass.data.subtitleHistoryState = null;
                appClass.data.subtitleHistoryRows = [];
                appClass.data.subtitleHistoryHtml = null;
                appClass.data.subtitleHistoryActiveIndex = null;
                appClass.data.subtitleHistorySearchText = '';
                appClass.data.subtitleHistorySearchMatches = [];
            },
            collectSubtitleHistory: function () {
                if (window['my_netflix_auto_history_sidebar'] == 'false') {
                    appClass.method.clearSubtitleHistory();
                    return;
                }
                var core = appClass.method.getSubtitleHistoryCore();
                var state = appClass.method.ensureSubtitleHistoryState();
                if (core == null || state == null || typeof (core.recordSubtitleHistory) != "function") return;
                if ($("video").length == 0) return;

                var movieID = appClass.method.getMovieID();
                var currentMs = Math.floor($("video")[0].currentTime * 1000);
                core.recordSubtitleHistory(state, {
                    movieId: movieID,
                    currentMs: currentMs,
                    nowMs: Date.now(),
                    mainText: window['lastWord_a'],
                    subText: window['lastWord_b']
                });
                appClass.data.subtitleHistoryRows = core.getSubtitleHistoryRows(state);
                appClass.data.subtitleHistoryHtml = null;
            },
            findSubtitleHistoryActiveIndex: function (rows, currentMs) {
                if (rows == null || rows.length == 0) return -1;
                for (var i = 0, max_i = rows.length; i < max_i; i++) {
                    var nextStartMs = (i + 1 < max_i) ? rows[i + 1].startMs : null;
                    if (currentMs >= rows[i].startMs && (nextStartMs == null || currentMs < nextStartMs)) return i;
                }
                return rows.length - 1;
            },
            buildSubtitleHistoryHtml: function (rows) {
                var core = appClass.method.getSubtitleHistoryCore();
                var html = [];
                rows = rows || [];
                for (var i = 0, max_i = rows.length; i < max_i; i++) {
                    var row = rows[i];
                    var isMatch = $.inArray(i, appClass.data.subtitleHistorySearchMatches) != -1;
                    html.push("<div reqc='my_netflix_history_row' data-row-index='" + i + "' class='" + (isMatch ? "my_netflix_history_row_match" : "") + "'>");
                    html.push("<div reqc='my_netflix_history_time'>" + core.formatSubtitleHistoryTime(row.startMs) + " --> " + core.formatSubtitleHistoryTime(row.endMs) + "</div>");
                    if (row.mainText != null && row.mainText != "") html.push("<div reqc='my_netflix_history_text_main'></div>");
                    if (row.subText != null && row.subText != "") html.push("<div reqc='my_netflix_history_text_sub'></div>");
                    html.push("</div>");
                }
                return html.join("");
            },
            updateSubtitleHistorySearch: function () {
                var core = appClass.method.getSubtitleHistoryCore();
                if (core == null || typeof (core.searchSubtitleHistoryRows) != "function") return;
                var query = $("input[reqc='my_netflix_history_search_input']").val() || '';
                appClass.data.subtitleHistorySearchText = query;
                appClass.data.subtitleHistorySearchMatches = core.searchSubtitleHistoryRows(appClass.data.subtitleHistoryRows, query);
                appClass.data.subtitleHistoryHtml = null;
            },
            seekSubtitleHistoryRow: function (rowIndex) {
                var rows = appClass.data.subtitleHistoryRows || [];
                var row = rows[rowIndex];
                if (row == null || $("video").length == 0) return;
                var video = $("video")[0];
                try {
                    video.currentTime = Math.max(0, row.startMs / 1000);
                }
                catch (e) {
                    // Netflix 有時對時間跳轉很敏感，失敗就只維持高亮，不硬點 timeline。
                }
            },
            showSubtitleHistorySidebar: function () {
                if (window['my_netflix_auto_history_sidebar'] == 'false') return;
                $("div[reqc='my_netflix_history_sidebar']").show().addClass("my_netflix_history_sidebar_show");
            },
            hideSubtitleHistorySidebar: function () {
                $("div[reqc='my_netflix_history_sidebar']").removeClass("my_netflix_history_sidebar_show");
            },
            updateSubtitleHistorySidebar: function () {
                var sidebar = $("div[reqc='my_netflix_history_sidebar']");
                if (sidebar.length == 0) return;
                if (window['my_netflix_auto_history_sidebar'] == 'false') {
                    sidebar.removeClass("my_netflix_history_sidebar_show").hide();
                    return;
                }
                if ($("video").length == 0) {
                    sidebar.hide();
                    return;
                }

                sidebar.show();
                var body = sidebar.find("div[reqc='my_netflix_history_sidebar_body']");
                var rows = appClass.data.subtitleHistoryRows || [];
                if (rows.length == 0) {
                    body.html("<div reqc='my_netflix_history_empty'>Waiting for live subtitles...</div>");
                    return;
                }

                var html = appClass.method.buildSubtitleHistoryHtml(rows);
                if (appClass.data.subtitleHistoryHtml != html) {
                    appClass.data.subtitleHistoryHtml = html;
                    body.html(html);
                    var rowDoms = body.find("div[reqc='my_netflix_history_row']");
                    for (var i = 0, max_i = rowDoms.length; i < max_i; i++) {
                        var row = rows[i];
                        if (row.mainText != null && row.mainText != "") rowDoms.eq(i).find("div[reqc='my_netflix_history_text_main']").text(row.mainText);
                        if (row.subText != null && row.subText != "") rowDoms.eq(i).find("div[reqc='my_netflix_history_text_sub']").text(row.subText);
                    }
                    rowDoms.unbind("click").bind("click", function () {
                        appClass.method.seekSubtitleHistoryRow(parseInt($(this).attr("data-row-index"), 10));
                    });
                }

                var currentMs = Math.floor($("video")[0].currentTime * 1000);
                var activeIndex = appClass.method.findSubtitleHistoryActiveIndex(rows, currentMs);
                if (activeIndex != appClass.data.subtitleHistoryActiveIndex) {
                    appClass.data.subtitleHistoryActiveIndex = activeIndex;
                    body.find("div[reqc='my_netflix_history_row']").removeClass("my_netflix_history_row_active");
                    var activeDom = body.find("div[reqc='my_netflix_history_row'][data-row-index='" + activeIndex + "']");
                    activeDom.addClass("my_netflix_history_row_active");
                    if (appClass.data.subtitleHistoryAutoScroll === true &&
                        $("video")[0].paused !== true &&
                        Date.now() >= appClass.data.subtitleHistoryUserScrollUntil &&
                        activeDom.length != 0) {
                        var targetOffset = body.height() * 0.48;
                        var nextScrollTop = body.scrollTop() + activeDom.position().top - targetOffset + (activeDom.outerHeight() / 2);
                        if (nextScrollTop < 0) nextScrollTop = 0;
                        body.stop(true).animate({ scrollTop: nextScrollTop }, 160);
                    }
                }
            },
```

- [ ] **Step 2: Append sidebar DOM after controller UI is created**

After the existing controller UI append block, add:

```js
    $("div[reqc='my_netflix_history_sidebar']").remove();
    $("body").append("<div reqc='my_netflix_history_sidebar'><div reqc='my_netflix_history_sidebar_header'><div reqc='my_netflix_history_sidebar_title'>歷史字幕 / Subtitle History</div><div reqc='my_netflix_history_sidebar_actions'><button reqc='my_netflix_history_autoscroll' type='button' data-enabled='YES' title='Auto scroll'>AUTO</button><button reqc='my_netflix_history_close' type='button' title='Hide sidebar'>×</button></div></div><div reqc='my_netflix_history_search'><input reqc='my_netflix_history_search_input' type='text' placeholder='搜尋目前 50 句'></div><div reqc='my_netflix_history_sidebar_body'></div></div>");
    $("div[reqc='my_netflix_history_sidebar_body']").unbind("scroll").bind("scroll", function () {
        appClass.data.subtitleHistoryUserScrollUntil = Date.now() + 3000;
    });
    $("button[reqc='my_netflix_history_autoscroll']").unbind("click").bind("click", function (e) {
        appClass.data.subtitleHistoryAutoScroll = !appClass.data.subtitleHistoryAutoScroll;
        $(this).attr("data-enabled", appClass.data.subtitleHistoryAutoScroll ? "YES" : "NO");
        e.preventDefault();
        e.stopPropagation();
    });
    $("button[reqc='my_netflix_history_close']").unbind("click").bind("click", function (e) {
        appClass.method.hideSubtitleHistorySidebar();
        e.preventDefault();
        e.stopPropagation();
    });
    $("input[reqc='my_netflix_history_search_input']").unbind("input").bind("input", function () {
        appClass.method.updateSubtitleHistorySearch();
    }).unbind("keydown").bind("keydown", function (e) {
        if (e.key != "Enter") return;
        var matches = appClass.data.subtitleHistorySearchMatches || [];
        if (matches.length == 0) return;
        appClass.method.seekSubtitleHistoryRow(matches[0]);
    });
```

- [ ] **Step 3: Add setting click handler**

After the existing `my_netflix_auto_fix_cc` click handler, add:

```js
    $("input[reqc='my_netflix_auto_history_sidebar']").unbind("click").bind("click", function () {
        window['my_netflix_auto_history_sidebar'] = $("input[reqc='my_netflix_auto_history_sidebar']").prop("checked").toString();
        appClass.method.setMemory('my_netflix_auto_history_sidebar', window['my_netflix_auto_history_sidebar']);
        if (window['my_netflix_auto_history_sidebar'] == 'false') {
            appClass.method.clearSubtitleHistory();
            $("div[reqc='my_netflix_history_sidebar']").removeClass("my_netflix_history_sidebar_show").hide();
        }
        else {
            appClass.method.showSubtitleHistorySidebar();
        }
    });
```

- [ ] **Step 4: Collect and update inside `subtitleUIInterval`**

Inside `subtitleUIInterval`, after:

```js
            window['lastWord_a'] = appClass.method.trim(window['lastWord_a']);
            window['lastWord_b'] = appClass.method.trim(window['lastWord_b']);
```

add:

```js
            appClass.method.collectSubtitleHistory();
            appClass.method.updateSubtitleHistorySidebar();
```

Also near the start of `subtitleUIInterval`, after `var my3waSubDiv = ...`, add:

```js
        appClass.method.updateSubtitleHistorySidebar();
```

- [ ] **Step 5: Reset history on movie or subtitle menu refresh**

Where the code resets `appClass.flag.sub1` / `appClass.flag.sub2` after reading the Netflix subtitle menu, add:

```js
            appClass.method.clearSubtitleHistory();
```

- [ ] **Step 6: Run syntax and existing tests**

Run:

```powershell
node --check 3wa_netflix\background.js
node test\subtitle-history.test.js
node test\subtitle-core.test.js
node test\font-download-links.test.js
```

Expected: all exit code 0.

- [ ] **Step 7: Commit**

Run:

```powershell
git add 3wa_netflix\background.js
git commit -m "feat: add subtitle history sidebar UI"
```

---

### Task 5: Update README And History

**Files:**
- Modify: `README.md`
- Modify: `history.md`

- [ ] **Step 1: Add V3.6.8 entry in README**

Before the `V3.6.7` version line near the top, add:

```html
    V3.6.8 (2026-06-22)<br>
```

At the top of `<pre>` version notes, add:

```html
  (2026-06-22) V3.6.8 版:
    1、Issue 127、重新加入右側「歷史字幕 / Subtitle History」浮動視窗，只收 live 顯示過的字幕句子，最多保留 50 筆，雙字幕盡可能合併同一時間列，並提供搜尋、自動捲動與保守版點擊跳轉。

```

At the bottom Todo list after issue 126, add:

```html
  <li>(Done 2026-06-22)127、3.6.8 重新加入右側歷史字幕浮動視窗，只收 live 顯示過的最多 50 筆字幕，支援搜尋、自動捲動與保守版跳轉。</li>
```

- [ ] **Step 2: Update history.md**

Append:

```md
- V3.6.8 開發：新增 live-only 右側歷史字幕功能，核心邏輯由 `subtitle-core.js` 提供，UI 接在 `background.js`；保留最多 50 筆，不從 XML 展開整份字幕。
```

- [ ] **Step 3: Run tests**

Run:

```powershell
node test\subtitle-history.test.js
node test\subtitle-core.test.js
node test\font-download-links.test.js
```

Expected: all PASS.

- [ ] **Step 4: Commit**

Run:

```powershell
git add README.md history.md
git commit -m "docs: document subtitle history sidebar"
```

---

### Task 6: Final Verification

**Files:**
- Read-only verification

- [ ] **Step 1: Run all automated checks**

Run:

```powershell
node --check 3wa_netflix\background.js
node --check 3wa_netflix\subtitle-core.js
node test\subtitle-history.test.js
node test\subtitle-core.test.js
node test\font-download-links.test.js
```

Expected:

```text
subtitle history tests passed
subtitle-core tests passed
font download link tests passed
```

- [ ] **Step 2: Inspect git status**

Run:

```powershell
git status --short --branch
```

Expected: clean `v3.6.8` branch.

- [ ] **Step 3: Report manual testing gap**

If Netflix is not opened and manually tested in a browser, report that automated checks passed but Netflix in-browser behavior still needs manual confirmation.
