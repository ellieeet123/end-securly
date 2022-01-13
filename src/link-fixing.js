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

function collectLinksFromIframe(outerElement) {
    try {
        let list = []
        for (let i = 0; i < outerElement.contentWindow.document.getElementsByTagName('a').length; i++) {
            list.push(outerElement.contentWindow.document.getElementsByTagName('a')[i]);
        }
        return list;
    } catch (e) {
        console.log('error in collectLinksFromIframe: ' + e);
        outerElement.style.borderStyle = 'solid';
        outerElement.style.borderColor = 'red';
        outerElement.style.background  = '#ff000066';
        outerElement.style.borderWidth = '4px';
        return [];
    }
}

function fixLinks() {
    let target;
    let links = collectLinks(window.document);
    let iframes = document.getElementsByTagName('iframe');
    for (let i = 0; i < iframes.length; i++) {
        links = links.concat(collectLinksFromIframe(iframes[i]));
    }
    for (let i = 0; i < links.length; i++) {
        target = links[i].target
        if (target === '') {
            target = '_self'
        }
        links[i].dataset.previous_target = target;
        links[i].target = 'unblock_iframe'
    }
}

function unfixLinks() {
    let links = document.querySelectorAll('[data-previous_target]');
    for (let i = 0; i < links.length; i++) {
        links[i].target = links[i].dataset.previous_target;
    }
}
