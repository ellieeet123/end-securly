// new thingy that hopefully will open a new iframe containing a proxy

javascript:
var ellieeet_google_embed = {
    "width": 400,
    "height": 300,
    "location": {
        "x": 25,
        "y": 25
    },
    "resizeMode": false,
    "resizeHover": false,
    "moveMode": false,
    "moveHover": false
};

function ellieeet_google_embed_updateSizes() {
    document.getElementById("ellieeet_google_embed_frame").style.width  = ellieeet_google_embed.width  + 'px';
    document.getElementById("ellieeet_google_embed_frame").style.height = ellieeet_google_embed.height + 'px';
    document.getElementById("ellieeet_google_embed_frame").style.top = (ellieeet_google_embed.location.y).toString() + 'px';
    document.getElementById("ellieeet_google_embed_frame").style.left = (ellieeet_google_embed.location.x).toString() + 'px';;
    document.getElementById("ellieeet_google_embed_resize").style.left  = ((ellieeet_google_embed.location.x + ellieeet_google_embed.width)).toString() + 'px';
    document.getElementById("ellieeet_google_embed_resize").style.top   = ((ellieeet_google_embed.location.y + ellieeet_google_embed.height)).toString() + 'px';
    document.getElementById("ellieeet_google_embed_move").style.top = (ellieeet_google_embed.location.y).toString() + 'px';
    document.getElementById("ellieeet_google_embed_move").style.left = (ellieeet_google_embed.location.x).toString() + 'px';;
}

(function(){
    document.addEventListener("mousemove", function(e) {
        if (ellieeet_google_embed.resizeMode) {
            ellieeet_google_embed.width  = e.clientX - ellieeet_google_embed.location.x;
            ellieeet_google_embed.height = e.clientY - ellieeet_google_embed.location.y;
            ellieeet_google_embed_updateSizes();
        }
        else if (ellieeet_google_embed.moveMode) {
            ellieeet_google_embed.location.x = e.clientX;
            ellieeet_google_embed.location.y = e.clientY;
            ellieeet_google_embed_updateSizes();
        }
    });
    document.addEventListener("mousedown", function(){
        if (ellieeet_google_embed.resizeHover) {
            ellieeet_google_embed.resizeMode = true;
            document.body.style.userSelect = 'none';
        }
        else if (ellieeet_google_embed.moveHover) {
            ellieeet_google_embed.moveMode = true;
            document.body.style.userSelect = 'none';
        }
    });
    document.addEventListener("mouseup", function(){
        if (ellieeet_google_embed.resizeHover) {
            ellieeet_google_embed.resizeMode = false;
            document.body.style.userSelect = 'auto';
            document.getElementById("ellieeet_google_embed_iframe").width  = ellieeet_google_embed.width;
            document.getElementById("ellieeet_google_embed_iframe").height = ellieeet_google_embed.height;
        }
        else if (ellieeet_google_embed.moveHover) {
            ellieeet_google_embed.moveMode = false;
            document.body.style.userSelect = 'auto';
            document.getElementById("ellieeet_google_embed_iframe").width  = ellieeet_google_embed.width;
            document.getElementById("ellieeet_google_embed_iframe").height = ellieeet_google_embed.height;
        }
    });
    let div = document.createElement('div');
    let base = 'cc8o9ffyjh3xvrbu';
    div.style.position = 'fixed';
    div.style.left = ellieeet_google_embed.location.x + 'px';
    div.style.top = ellieeet_google_embed.location.y + 'px';
    div.style.width = '400px';
    div.style.height = '300px';
    div.style.borderStyle = 'solid';
    div.style.borderColor = '#fff';
    div.style.borderWidth = '5px';
    div.style.background = 'rgba(0,0,0,0.5)';
    div.style.color = '#fff';
    div.style.padding = '0px';
    div.style.margin = '0px';
    div.style.zIndex = '999999999';
    div.id = 'ellieeet_google_embed_frame';
    div.innerHTML = `
    <iframe id="ellieeet_google_embed_iframe" src="https://cc8o9ffyjh3xvrbu.herokuapp.com/"
    style="position:relative; top:0px; left:0px;" frameborder="0" width="400" height="300">Loading... </iframe>`;
    
    let resize = document.createElement('div');
    resize.style.position = 'fixed';
    resize.style.cursor = 'nwse-resize';
    resize.style.top  = ((ellieeet_google_embed.location.y + ellieeet_google_embed.height)).toString() + 'px';
    resize.style.left = ((ellieeet_google_embed.location.x + ellieeet_google_embed.width)).toString() + 'px';
    resize.style.height = '15px';
    resize.style.width = '15px';
    resize.style.zIndex = '9999999999';
    resize.style.background = 'rgba(120, 120, 120, 0.5)';
    resize.id = 'ellieeet_google_embed_resize';
    resize.onmouseenter = function() {
        ellieeet_google_embed.resizeHover = true;
    }
    resize.onmouseleave = function() {
        ellieeet_google_embed.resizeHover = false;
    }
    div.appendChild(resize);

    let move = document.createElement('div');
    move.style.position = 'fixed';
    move.style.cursor = 'move';
    move.style.top  = (ellieeet_google_embed.location.y).toString() + 'px';
    move.style.left = (ellieeet_google_embed.location.x).toString() + 'px';
    move.style.height = '15px';
    move.style.width = '15px';
    move.style.zIndex = '9999999999';
    move.style.background = 'rgba(120, 120, 120, 0.5)';
    move.id = 'ellieeet_google_embed_move';
    move.onmouseenter = function() {
        ellieeet_google_embed.moveHover = true;
    }
    move.onmouseleave = function() {
        ellieeet_google_embed.moveHover = false;
    }
    div.appendChild(move);


    let close = document.createElement('div');
    close.style.position = 'fixed';
    close.style.cursor = 'cursor';
    close.style.top  = (ellieeet_google_embed.location.y).toString() + 'px';
    close.style.left = (ellieeet_google_embed.location.x + ellieeet_google_embed.width).toString() + 'px';
    close.style.height = '15px';
    close.style.width = '15px';
    close.style.zIndex = '9999999999';
    close.style.background = 'rgba(fff, 120, 120, 0.5)';
    close.id = 'ellieeet_google_embed_close';
    close.onclick = function() {
        document.getElementById("ellieeet_google_embed_frame").remove();
    }
    div.appendChild(close);

    document.body.appendChild(div);
})();
