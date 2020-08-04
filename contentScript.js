{
    let elements = document.getElementsByTagName("img");
    let first_sheet_link = "";

    if (elements.length > 0) {
        for (i = 0; i < elements.length; i++) {
            let src = elements[i].getAttribute("src");
            if (src && (src.includes("svg") || src.includes("png"))) {
                first_sheet_link = src.substring(0, src.indexOf('?'));
                break;
            }
        }
    }

    let sheet_name = document.getElementsByTagName("h1");
    chrome.extension.sendRequest([first_sheet_link, sheet_name[0].innerHTML]);
}
