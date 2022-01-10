javascript:
(function() {
    function loadScript() {
        var script = document.createElement('script');
        script.src = "https://ellieeet123.github.io/end-securly/unblocker.js";
        script.id = 'unblockerscript';
        try {
            document.body.appendChild(script);
        }
        catch {}
        finally {
            alert('hi this is from the finally statement');
            document.getElementById('unblockerscript').onload = function() {
                try {
                    click();
                    alert('worked');
                    return true;
                }
                catch(err) {
                    alert('did not work');
                    return false;
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
