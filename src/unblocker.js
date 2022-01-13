
/*\  
|*|   The main part of the unblocker!
|*|   This script will be automatically injected into the page
|*|   via <bookmarklet.js>
\*/ 

var base = 'ui4b9x03syw0ka1j';
var started;
if (!started) {
    started = true;
    var timesClicked = 1;
}
function element(id) {
    return document.getElementById(id);
}

function unblock() {
    try {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var p = 'https://' + base + '.herokuapp.com';
        var html = '<!doctype html><html><body><iframe id="unblock_iframe" name="unblock_iframe" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe></body></html>';
        document.write('');
        document.write(html);
        var f = element('unblock_iframe');
        f.src = p;
        f.width = w;
        f.height = h;
        window.onresize = function() {
            element('unblock_iframe').width  = window.innerWidth;
            element('unblock_iframe').height = window.innerHeight;        
        }
        if (element('unblock_iframe').contentWindow.document.getElementById('offline-resources')) {
            alert('[ERROR] ' + window.location.hostname + ' has blocked the iframe content. Double click the bookmarklet to open a new proxy tab.');
        }
    } catch(err) {
        alert('[ERROR] ' + window.location.hostname + ' has blocked the iframe content. Double click the bookmarklet to open a new proxy tab. Full error report: ' + err);
    }
    timesClicked = 1;
}

function openNewTab(url) {
    if (element('unblock_link')) {
        element('unblock_link').click();
    }
    else {
        var link = document.createElement('a');
        link.href = url;
        link.style.position = 'fixed';
        link.style.top = '1000000px';
        link.id = 'unblock_link';
        link.target = '_blank';
        link.click();
    }
}

function reloadFrame() {
    var f = element('unblock_iframe');
    if (f) {
        f.src = f.src;
    } else {
        alert('[ERROR] Unable to reload frame, most likely due to the fact that no proxy frame is present.');
    }
}

function closeMenu() {
    document.getElementById('proxyMenu').remove();
    started = false;
}

function buildMenu() {
    var menu = document.createElement('div');
    menu.style.background   = '#444';
    menu.style.width        = (window.innerWidth - 30) + 'px';
    menu.style.position     = 'fixed';
    menu.style.top          = '15px';
    menu.style.left         = '15px'
    menu.style.fontFamily   = 'sans-serif';
    menu.style.fontSize     = '18px';
    menu.style.color        = '#fff';
    menu.style.textAlign    = 'center';
    menu.style.lineHeight   = '30px';
    menu.style.borderRadius = '5px';
    menu.style.zIndex       = '9999999999';
    menu.style.borderStyle  = 'solid';
    menu.style.borderWidth  = '2px';
    menu.style.borderColor  = '#fff';
    menu.innerHTML += '<p style="display:inline">Unblocker Menu (Doubleclick again to open new proxy tab) | </p>';
    menu.innerHTML += '<a style="display:inline;color:#0ff;cursor:pointer;text-decoration:underline">Open proxy in this tab</a>';
    menu.innerHTML += '<p style="display:inline"> | </p>';
    menu.innerHTML += '<a style="display:inline;color:#0ff;cursor:pointer;text-decoration:underline">Open non-incognito proxy in new tab</a>';
    menu.innerHTML += '<p style="display:inline"> | </p>';
    menu.innerHTML += '<a style="display:inline;color:#0ff;cursor:pointer;text-decoration:underline">Reload Page</a>';
    menu.innerHTML += '<p style="display:inline"> | </p>';
    menu.innerHTML += '<a style="display:inline;color:#0ff;cursor:pointer;text-decoration:underline">Close Menu</a>';
    var a = menu.getElementsByTagName('a');
    a[0].onclick = function() { unblock(); };
    a[1].onclick = function() { openNewTab('https://' + base + '.herokuapp.com'); };
    a[2].onclick = function() { reloadFrame(); };
    a[3].onclick = function() { closeMenu(); };
    menu.id = 'proxyMenu';
    document.body.appendChild(menu);
}

function main() {
    if (window.location.href == 'about:blank') {
        unblock();
    }
    else {
        if (element('proxyMenu')) {
            closeMenu();
        }
        openNewTab('about:blank');
    }
}

// runs whenever the bookmarklet is clicked
function click() {
    if (timesClicked == 1 && window.location.href != 'about:blank') {
        buildMenu();
        timesClicked++;
    }
    else {
        main();
    }
}
