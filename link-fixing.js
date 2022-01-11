/*\ 
|*|  link-fixing.js
|*|  
|*|  "fixes" links by making them open within the main proxy frame
|*|  this is just so that you don't accidentally click a link with
|*|  target set to _blank, and have it open in a new tab
|*|  (Doing so would make it non-incognito) 
\*/

function collectLinks(outerElement) {
    let list = []
    for (let i = 0; i < outerElement.getElementsByTagName('a').length; i++) {
        list.push(outerElement.getElementsByTagName('a')[i]);
    }
    return list;
}

function fixLinks() {
    let links = collectLinks(window.document);
    let iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
        links = links.concat(collectLinks(iframes[i]));
    }
    for (let i = 0; i < links.length; i++) {
        links[i].dataset.previous_target = links[i].target;
        links[i].target = 'unblock_iframe'
    }
}

function unfixLinks() {
    let links = document.querySelectorAll('[data-previous_target]');
    for (let i = 0; i < links.length; i++) {
        links[i].target = links[i].dataset.previous_target;
    }
}
