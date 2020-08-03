let elements = document.getElementsByTagName("img");
let sheet_link;

if (elements.length > 0) {
    for (i = 0; i < elements.length; i++) {
        let src = elements[i].getAttribute("src");
        if (src && src.includes("svg")) {
            sheet_link = src;
        }
    }
}

let sheet_name = document.getElementsByTagName("h1");
chrome.extension.sendRequest([sheet_link, sheet_name[0].innerHTML]);