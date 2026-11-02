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

## 2026-11-02

- 使用者回報：Brave 進入全螢幕時，video 偶爾變窄又變寬；當時未開啟歷史字幕。
- 原因與重現：外掛以 body.requestFullscreen() 啟動全螢幕，但未限制 body 的 overflow；字幕層維持 height:0 / overflow:visible。當頁面 overflow-y 為 auto，長字幕或多行字幕超出播放器下緣會撐出垂直捲軸，短字幕或空字幕又使捲軸消失，改變 video 可用寬度。此為本機相容條件重現，未直接驗證使用者 Netflix 真人播放頁的 CSS。
- 修正：只在外掛請求的 body 加入 my3wa_netflix_fullscreen 標記，使用 body.my3wa_netflix_fullscreen:fullscreen 的 overflow:hidden !important 固定可用區域；不反覆設定 video 寬高。退出全螢幕或請求失敗時，:fullscreen 不匹配，原本的頁面捲動樣式自然恢復。
- Firefox：透過 chrome2firefox.php 在暫存目錄產出 content.js，再同步回 firefox_extension/3wa_netflix/content.js；Chrome / Firefox 各僅增加 5 行，保留既有 UTF-8 無 BOM 與 CRLF。未改版本號或 release zip。
- 本機瀏覽器驗證：Playwright 啟動獨立 Brave headless（不讀取既有 profile），以模擬 Netflix DOM、真實本機 canvas video stream 與實際外掛程式測試。HEAD 舊碼在相同回歸檢查失敗，1280px 視窗下的 video 寬度隨字幕呈現 1280 / 1265 / 1280 / 1265 / 1280；修正後五種字幕狀態均維持 1280。
- Chrome 主程式與生成的 Firefox content.js 都在 Brave 測試通過：1280x720、1920x1080、1366x768、800x600；全螢幕按鈕、F 熱鍵、video 雙擊；退出後恢復原樣式、請求失敗、其他元素全螢幕與返回 /browse 的作用範圍；歷史字幕面板內部仍可捲動；page / console errors 與 warnings 均為 0。一次性腳本與截圖位於本機 TEMP/3wa-netflix-fullscreen-20261102，未納入程式庫。
- 既有驗證：test/*.test.js 共 6 支全部通過（subtitle-core、settings-core、subtitle-history、subtitle-history-ui、subtitle-storage-isolation、font-download-links）；Chrome background.js 與 Firefox content.js 的 node --check 通過；git diff --check 通過。
- 未驗證邊界：尚未在真人 Netflix 帳號 / DRM 影片上重現及驗收；Firefox runtime 未實測，Firefox 腳本在 Brave 通過不等同 Firefox 瀏覽器驗收；未重新打包、提交商店或發布版本。使用者需重新載入本機外掛並重新整理 Netflix 頁面後實測。
- 依使用者要求建立 v3.6.9 測試分支，Chrome / Firefox manifest 與介面 appVersion 同步提升為 3.6.9；README 新增 2026-11-02 測試中版本與全螢幕修正說明，待使用者回家驗收。
- 3.6.9 簽入前驗證：6 支既有 Node 測試、兩版腳本 node --check、manifest / appVersion 版本一致性、UTF-8 無 BOM / CRLF 與 git diff --check 均通過。Firefox manifest / content.js 由轉版工具重新產出。
- 此次保留為測試分支 checkpoint，尚未建立 release zip 或發版 tag；README 正式最新版下載仍指向既有 V3.6.8，避免指向尚未產出的 V3.6.9 套件。Netflix 真人播放及 Firefox runtime 驗收仍待完成。
