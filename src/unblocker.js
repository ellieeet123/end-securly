
/*\
|*|   The main part of the unblocker!
|*|   This script will be automatically injected into the page
|*|   via <bookmarklet.js>
\*/

if (!unblocker) {
    var unblocker = {}; // a main variable that will hold all other functions
    unblocker.base      = 'hrqa6iy6j6hn4fjm';
    unblocker.started   = undefined;
    unblocker.unblocked = false;
}
if (!unblocker.started) {
    unblocker.started = true;
    var timesClicked = 1;
}

function element(id) {
    return document.getElementById(id);
}

function unblock() {
    try {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var url = 'https://' + base + '.herokuapp.com';
        var html = ''
        // this is a weird way of writing html but it works lol
        +'<html>'
        +    '<body>'
        +        '<style>'
        +            'iframe {'
        +                'position: fixed;'
        +                'right: 0px;'
        +                'top: 0px;'
        +            '}'
        +        '</style>'
        +        '<iframe id="unblock_iframe" '
        +        'name="unblock_iframe" '
        +        'height="10" width="10" frameborder="0" src="https://ellieeet123.github.io"'
        +        '></iframe>'
        +    '</body>'
        +'</html>';
        document.write(html);
        var frame = element('unblock_iframe');
        frame.src = url;
        frame.width = width;
        frame.height = height;
        window.onresize = function() {
            element('unblock_iframe').width  = window.innerWidth;
            element('unblock_iframe').height = window.innerHeight;        
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
    menu.style.all          = 'initial';
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
    menu.style.borderRadius = '15px';
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
    if (window.location.href === 'about:blank') {
        if (unblocked) {
            buildMenu()
        }
        else {
            unblock();
            unblocked = true;
        }
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
    if (timesClicked === 1 && window.location.href !== 'about:blank') {
        buildMenu();
        timesClicked++;
    }
    else {
        main();
    }
}

if (window.bookmarkletVersion !== 1.1) {
    if (
        confirm(
            'There is a new version of the bookmarklet available. ' +
            'To install it, press OK, then copy all of the code below ' +
            '"bookmarklet code (last updated...)" and replace your current ' +
            'bookmarklet with that new code.'
        )
    ) {
        openNewTab('https://github.com/ellieeet123/end-securly#bookmarklet-code-last-update-09-mar-2022');
    }
}
