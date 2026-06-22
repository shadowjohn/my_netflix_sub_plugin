# Subtitle History Sidebar Design

## Goal

在 `v3.6.8` 重新加入右側「歷史字幕 / Subtitle History」浮動視窗，讓使用者能查閱最近實際播放過的字幕片段，方便學習與回看，同時避免提供整份字幕。

## Scope

- 從 2026-03-29 的 `V3.6.2` 取回右側歷史字幕 UI 概念。
- 不整檔回搬舊版 `background.js`，因為目前 `3.6.7` 已拆成 `settings-core.js`、`subtitle-core.js`、`page-hook.js`，且字幕同步邏輯已不同。
- 不從 XML cache 一次展開整份字幕。
- 只收集播放過程中 live 顯示過的 `lastWord_a` / `lastWord_b`。

## Product Decisions

1. 歷史字幕只收 live 顯示過的句子。
2. 最多保留 50 筆 row。
3. 退場機制以進入列表時間 FIFO 為準。
4. UI 顯示依影片時間軸 `startMs` 排序。
5. 雙字幕開啟時，盡可能把同一時間點的主字幕與次字幕放在同一筆 row。
6. 同一筆 row 只顯示一組起訖時間。
7. 避免字幕重複疊加到歷史字幕區。
8. 關閉開關後不顯示、不收集，並清掉記憶體內的歷史 row。

## Data Model

歷史字幕只存在頁面記憶體，不寫入 `localStorage`，避免下次打開仍保留字幕內容。

```js
{
  id: "movieId:startMs:mainHash:subHash",
  movieId: "81234567",
  startMs: 123400,
  endMs: 126800,
  insertedAt: 1719040000000,
  mainText: "主字幕文字",
  subText: "Secondary subtitle text"
}
```

`insertedAt` 只用於 FIFO 淘汰，不影響 UI 排序。

## Collection Rules

`subtitleUIInterval` 已經會在畫面更新前整理 `window['lastWord_a']` 與 `window['lastWord_b']`。歷史字幕收集應掛在這個位置，確保只收實際顯示過的字幕。

收集前先做正規化：

- `null`、空字串不收。
- 多空白合併。
- 頭尾空白移除。
- 連續相同文字不新增 row。
- 只有主字幕、只有次字幕、或主次字幕都有，都能形成 row。

## Merge And Dedupe Rules

新增字幕時以目前影片時間 `video.currentTime * 1000` 為時間基準。

1. 若最新 row 的 `mainText` / `subText` 與本次文字相同，且時間相距在 4 秒內，只延長 `endMs`。
2. 若主字幕先到、次字幕稍後到，且時間差在 1.2 秒內，補進同一 row。
3. 若次字幕先到、主字幕稍後到，且時間差在 1.2 秒內，補進同一 row。
4. 若同一文字在最近 6 筆中重複出現，且時間相距在 4 秒內，合併到既有 row。
5. 合併後不改 `insertedAt`，FIFO 順序仍依第一次進入列表時間。
6. 超過 50 筆時，依 `insertedAt` 刪除最早進入列表者。

## Sidebar UI

沿用 `V3.6.2` 右側浮動視窗概念，放在 `body` 下：

- 標題：`歷史字幕 / Subtitle History`
- 右上角按鈕：
  - 自動捲動切換
  - 關閉面板
- 搜尋列：
  - 可輸入關鍵字搜尋目前 50 筆字幕
  - 符合 row 加上 highlight class
  - Enter 跳到下一筆符合 row
- 內容區：
  - 每筆顯示時間
  - 主字幕文字
  - 次字幕文字
  - active row 依目前播放時間高亮

## Auto Scroll

自動捲動預設開啟。

- 播放中且自動捲動開啟時，面板跟隨目前播放時間捲到 active row。
- 使用者手動捲動時，暫停自動跟隨 3 秒。
- 影片暫停時不強制捲動，讓使用者可以自由上下捲。
- 使用者再次開啟自動捲動時，立即回到目前播放時間對應 row。

## Seek On Row Click

點擊歷史字幕 row 時嘗試跳到該 row 的 `startMs`。

實作只做保守 DOM API：

```js
var video = $("video")[0];
if (video != null && isFinite(row.startMs)) {
  video.currentTime = Math.max(0, row.startMs / 1000);
}
```

不模擬 Netflix timeline 點擊，不觸發播放器 UI 事件。若 Netflix 內部限制造成跳轉失敗，row 仍可高亮，不影響字幕播放。

## Settings

在「自動功能」新增 checkbox：

- key：`my_netflix_auto_history_sidebar`
- 預設：`true`
- 文案：`歷史字幕 / Subtitle History`
- 說明：`控制右側歷史字幕面板是否啟用。關閉後不會顯示，也不再收集字幕內容。`

關閉時：

- 隱藏 sidebar。
- 清空 `appClass.data.subtitleHistoryRows`。
- 清空搜尋狀態。
- 停止新增歷史 row。

## Implementation Boundaries

預計只修改 Chrome 主線檔案：

- `3wa_netflix/background.js`
- `3wa_netflix/subtitle-core.js`
- `test/subtitle-history.test.js`
- `README.md`
- `history.md`

Firefox 版本仍由既有 `chrome2firefox.php` / `run_zip.php` 流程同步輸出，不手改 `firefox_extension` 內的生成結果。

## Testing

新增 Node 單元測試覆蓋純資料邏輯：

- 正規化字幕文字。
- 主字幕與次字幕在時間窗內合併成一筆。
- 重複字幕不新增 row，只延長 `endMs`。
- 超過 50 筆後以 FIFO 淘汰。
- UI 排序依 `startMs`。
- 搜尋能回傳符合 row index。

手動測試：

- 載入未封裝 extension。
- 播放 Netflix 影片。
- 開啟雙字幕。
- 確認右側面板只累積播放過的句子。
- 確認關閉歷史字幕後不再收集。
- 確認搜尋、手動捲動、自動捲動、row 點擊跳轉不造成播放器卡死。

## Risk Notes

- 不展開整份 XML，是為了避免提供近似完整字幕內容。
- 最大 50 筆與 FIFO 淘汰可降低保存內容量。
- 搜尋只查目前 50 筆記憶體資料，不提供匯出功能。
- 跳轉只設定 `video.currentTime`，不操作 Netflix timeline，降低播放器當掉機率。
