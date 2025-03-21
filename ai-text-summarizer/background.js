// background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "summarize",
        title: "Summarize Text",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "summarize" && info.selectionText) {
        chrome.storage.sync.set({ selectedText: info.selectionText });
    }
});
