// 程式碼開始~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!// 程式碼結束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!

//新版，啟動後自動載入
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const tabUrl = (tab && typeof tab.url === "string") ? tab.url : "";
    if (
        changeInfo.status === "complete" &&
        (tabUrl.includes("www.netflix.com") || tabUrl.includes("netflix.com"))
    ) {
        // 嘗試用 scripting API（Chrome Manifest V3 專用）
        if (chrome.scripting && chrome.scripting.executeScript) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: run_3wa_netflix
            });
        }
        // 否則退回 V2 傳統注入方式（Firefox 支援）
        else if (chrome.tabs && chrome.tabs.executeScript) {
            chrome.tabs.executeScript(tabId, {
                file: "content.js"
            });
        }
    }
});
