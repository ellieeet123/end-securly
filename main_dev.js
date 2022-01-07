
/*\  
|*|   main.js except it has new WIP stuff
|*|   actually it's not WIP anymore
|*|   but who even cares lol
|*|   also this comment thing is really cool
|*|   what do I put here
\*/ 

javascript:
function element(id) {
    return document.getElementById(id)
}
function unblock() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var p = 'https://ui4b9x03syw0ka1j.herokuapp.com';
    var html = '<!doctype html><html><body><iframe id="unblock_iframe" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe></body></html>'
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
if (window.location.href == 'about:blank') {
    unblock();
}
else {
    openNewTab('about:blank');
}
