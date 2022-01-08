javascript:
(function() {
    function loadScript() {
        var script = document.createElement('script');
        script.src = "https://gist.githubusercontent.com/ellieeet123/ec16cb16341bed9ca66272d8b9a384d4/raw/479c6c1a868421c767e3e80c92aed5e15fd0fe9b/unblocker.js";
        document.body.appendChild(script);
        script.onload = function() {
            try {
                click();
            }
            catch(err) {
                if (confirm('ERROR: ' + window.location.hostname + ' has blocked the script. Would you like to open a blank tab to run it instead? (you will have to click the bookmarklet again)')) {
                    var link = document.createElement('a');
                    link.href = 'about:blank';
                    link.target = '_blank';
                    link.click();
                }
            }
        }
    }
    var bookmarkletClicked;
    if (!bookmarkletClicked) {
        bookmarkletClicked = true;
        loadScript();
    }
    else {
        click();
    }
})();
