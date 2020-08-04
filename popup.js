chrome.tabs.executeScript(null,{file: "contentScript.js"});

chrome.extension.onRequest.addListener(function(link) {
    let src = link[0];
    let extension = src.substring(src.indexOf('.', src.length - 5));
    let base_url = src.substring(0, src.indexOf('.', src.length - 5)).slice(0, -1);
    let url_to_download;

    for (i = 0; i < 100; i++) {
        url_to_download = base_url + i + extension;

        if (!checkURL(url_to_download)) {
            break;
        }

        chrome.downloads.download({url: url_to_download, filename: link[1] + "_" + i + extension},
            function(id) {

            }
        );
    }
});

function checkURL(url) {
    var reader = new XMLHttpRequest();
    reader.open('HEAD', url, false);
    reader.send();
    return reader.status != 404;
}