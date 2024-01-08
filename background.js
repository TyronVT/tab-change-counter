let switchCount = 0;

chrome.tabs.onActivated.addListener((activeInfo) => {
    switchCount++;
    chrome.storage.local.set({switchCount: switchCount});
});

