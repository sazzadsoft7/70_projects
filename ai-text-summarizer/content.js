// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getSelectedText") {
        const selectedText = window.getSelection().toString();
        sendResponse({ text: selectedText });
    }
});
