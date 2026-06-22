# history.md

## 2026-06-22

- 接續開發前檢查：目前分支 `main` 對齊 `origin/main`，工作區原本乾淨。
- 目前版本：`3wa_netflix/manifest.json` 為 `3.6.7`，README 最新紀錄為 V3.6.7，主題是修復 Netflix 字幕 XML 來源不匹配與下一集預抓歸戶問題。
- 建立並切換到開發分支 `v3.6.8`，後續功能與修正都先在此分支進行。
- Baseline 測試：
  - `node test\subtitle-core.test.js` 通過。
  - `node test\font-download-links.test.js` 通過。
  - `node test\netflix_twoSub.js` 直接用 Node 執行會因 `$ is not defined` 失敗；此檔看起來偏瀏覽器 / jQuery 環境腳本，不是目前可直接 Node 執行的測試。
- 接續注意：後續完成重要功能、修正、決策或踩雷紀錄時，依專案規則更新本檔。
- V3.6.8 歷史字幕設計決策：右側「歷史字幕 / Subtitle History」只收 live 顯示過的 `lastWord_a` / `lastWord_b`，不從 XML cache 展開整份字幕；最多 50 筆，依進入列表時間 FIFO 淘汰，UI 依影片時間排序，雙字幕盡可能合併成同一 row。
- V3.6.8 開發：新增 live-only 右側歷史字幕功能，核心邏輯由 `subtitle-core.js` 提供，UI 接在 `background.js`；保留最多 50 筆，不從 XML 展開整份字幕。
- V3.6.8 穩定性調整：右側歷史字幕預設關閉；字幕 XML 正式快取只信任 manifest 對到的 `movieId`，location fallback 與舊 XHR 直寫改走隔離，避免下一集預抓字幕寫入目前集數。
- V3.6.8 歷史字幕去重調整：雙字幕不同步時，若近時間內主字幕或次字幕其中一邊相同，視為同一段滑動字幕並更新成最新可見組合，避免 A+B、A+C、D+C 連續重複進列表。
- V3.6.8 歷史字幕語音：每列主/次字幕加入內建 TTS 播放鈕，使用瀏覽器 `speechSynthesis`，依字幕名稱與文字粗略判斷 `zh-TW`、`en-US`、`ja-JP`，不接外部 API。
- V3.6.8 歷史字幕語音補強：找不到指定語系 voice 時提示使用者，仍交給瀏覽器預設語音播放，避免 Brave 等瀏覽器 fallback 時誤判為功能故障。
- V3.6.8 歷史字幕語音提示調整：`smallComment` 既有呼叫慣例是毫秒，TTS 相關提示改為 4000ms，避免 2ms 閃過看不到。
- V3.6.8 `smallComment` 命名調整：將誤導的 `seconds` 參數改名為 `timeoutMs`，保留既有毫秒呼叫慣例。
- V3.6.8 歷史字幕補強：`smallComment` 改為每次呼叫都可套用 `cssOptions`；歷史字幕加入 `C` 清空按鈕並以 22px 提示「已清空...」；移除過期的 `test/v366-packaging.test.js`。
- V3.6.8 發版整理：更新 `appVersion`、README 最新下載連結與發版說明，並用 `run_zip.php` 產出 Chrome / Firefox V3.6.8 release zip。
