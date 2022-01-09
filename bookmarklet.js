javascript:
(function() {
    function loadScript() {
        var script = document.createElement('script');
        script.src = "https://ellieeet123.github.io/end-securly/unblocker.js";
        try {
            document.body.appendChild(script);
        }
        catch(err) {
            alert('test');
        }
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
