
/*\  
|*|   main.js except it has new WIP stuff
|*|   actually it's not WIP anymore
|*|   but who even cares lol
|*|   also this comment thing is really cool
|*|   what do I put here
\*/ 

javascript:
function unblock() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var p = 'https://cy3u3kx1wg8o1rj2.herokuapp.com';
    var html = '<!doctype html><html><body><iframe id="unblock_iframe" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe></body></html>'
    document.write('');
    document.write(html);
    var f = document.getElementById('unblock_iframe');
    f.src = p;
    f.width = w;
    f.height = h;
    window.onresize = function() {
        document.getElementById('unblock_iframe').width = window.innerWidth;
        document.getElementById('unblock_iframe').height = window.innerHeight;        
    }
}
if (window.location.href == 'about:blank') {
    unblock();
}
else {
    window.location.href = 'about:blank';
}
