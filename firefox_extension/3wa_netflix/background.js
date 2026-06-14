// 程式碼開始~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!// 程式碼結束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!

function is3waNetflixUrl(url) {
    return typeof (url) == "string" && (url.indexOf("www.netflix.com") != -1 || url.indexOf("netflix.com") != -1);
}

function execute3waNetflixScript(options) {
    try {
        var result = chrome.scripting.executeScript(options);
        if (result != null && typeof (result.then) == "function") {
            return result.catch(function () { });
        }
    }
    catch (e) {
        // 補注入失敗不影響使用者原本頁面。
    }

    return Promise.resolve();
}

function inject3waNetflixToTab(tabId) {
    if (tabId == null) return;

    // extension reload 後，已開啟的 Netflix tab 不會自動重新跑 manifest content_scripts。
    // 這裡主動補注入，讓開發時不用每次都手動 F5；早期字幕請求仍以 document_start 版本最完整。
    if (chrome.scripting && chrome.scripting.executeScript) {
        execute3waNetflixScript({
            target: { tabId: tabId },
            files: ["libs/jquery-3.7.1.min.js"]
        }).then(function () {
            return execute3waNetflixScript({
                target: { tabId: tabId },
                files: ["settings-core.js"]
            });
        }).then(function () {
            return execute3waNetflixScript({
                target: { tabId: tabId },
                files: ["subtitle-core.js"]
            });
        }).then(function () {
            return execute3waNetflixScript({
                target: { tabId: tabId },
                func: run_3wa_netflix
            });
        }).then(function () {
            return execute3waNetflixScript({
                target: { tabId: tabId },
                files: ["page-hook.js"],
                world: "MAIN"
            });
        });
    }
    else if (chrome.tabs && chrome.tabs.executeScript) {
        chrome.tabs.executeScript(tabId, {
            file: "content.js"
        });
    }
}

function inject3waNetflixToExistingTabs() {
    if (chrome.tabs == null || typeof (chrome.tabs.query) != "function") return;

    chrome.tabs.query({
        url: [
            "https://www.netflix.com/*",
            "https://netflix.com/*"
        ]
    }, function (tabs) {
        if (chrome.runtime.lastError) return;
        for (var i = 0, max_i = tabs.length; i < max_i; i++) {
            inject3waNetflixToTab(tabs[i].id);
        }
    });
}

if (chrome.runtime && chrome.runtime.onInstalled) {
    chrome.runtime.onInstalled.addListener(function () {
        inject3waNetflixToExistingTabs();
    });
}

if (chrome.runtime && chrome.runtime.onStartup) {
    chrome.runtime.onStartup.addListener(function () {
        inject3waNetflixToExistingTabs();
    });
}

//新版，啟動後自動載入
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (
        changeInfo.status === "complete" &&
        is3waNetflixUrl(tab.url)
    ) {
        inject3waNetflixToTab(tab.id);
    }
});
