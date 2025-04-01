// background.js

console.log("Background script running");

// No additional rules or listeners needed for web requests

chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.query({}, (tabs) => {
        for (let tab of tabs) {
            if (tab.id) chrome.tabs.reload(tab.id);
        }
    });
});

