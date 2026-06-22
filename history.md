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
