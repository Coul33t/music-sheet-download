chrome.tabs.executeScript(null,{file: "contentScript.js"});

chrome.extension.onRequest.addListener(function(link) {
    chrome.downloads.download({url: link[0], filename: link[1] + ".svg"},
        function(id) {
    });
});
