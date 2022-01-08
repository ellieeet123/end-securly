function fixLinks() {
    // takes all links on a page and makes them open in the main proxy iframe instead of a new tab
    var links = []
    function collectLinks(outerElement, list) {
        for (var i = 0; i < outerElement.getElementsByTagName('a').length; i++) {
            list.push(outerElement.getElementsByTagName('a')[i]);
        }
    }
    collectLinks(window.document, links);
    for (var i = 0; i < document.getElementsByTagName('iframe').length; i++) {
        list.push(outerElement.getElementsByTagName('a')[i]);
    }
}
