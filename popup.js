chrome.tabs.executeScript(null,{file: "contentScript.js"});

chrome.extension.onRequest.addListener(function(link) {
    chrome.downloads.download({url: link[0], filename: link[1] + ".svg"},
        function(id) {
    });
});
/*document.addEventListener("DOMContentLoaded", function() {
    var html = document.getElementsByTagName('html')[0];
    var text = html.innerHTML;
    alert(text);
    let elements = document.getElementsByTagName("div");
    alert("Number of elements found: " + elements.length);
    if (elements.length > 0) {
        for (element in elements) {
            if (element.value.includes("svg")) {
                alert("Found sheet!");
            } else {
                alert(element.value);
            }
        }
    }
});*/

