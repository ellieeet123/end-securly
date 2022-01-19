/*\ 
|*|  bookmarklet.js
|*|  
|*|  the main bookmarklet. It's main purpose
|*|  is just to injext the main script,
|*|  and then provide an error if it fails.
\*/

javascript:
(function() {
    var bookmarkletClicked;
    function loadScript() {
        document.addEventListener("securitypolicyviolation", (e) => {
            if (confirm('[ERROR]: ' + window.location.hostname + 
            ' has blocked inserting the necesary script for the unblocker. Would you like to open a blank tab to run it instead? (you will have to double click the bookmarklet again.) \n\n Full Error Report: '
            + e.originalPolicy)) {
                var a = document.createElement('a');
                a.href = 'about:blank';
                a.target = '_blank';
                a.click()
                bookmarkletClicked = false;
            }
        });
        var script = document.createElement('script');
        script.src = "https://ellieeet123.github.io/end-securly/src/unblocker.js";
        script.id = 'unblockerscript';
        document.body.appendChild(script);
        script.onload = function() {
            click();
        }
    }   
    if (!bookmarkletClicked) {
        bookmarkletClicked = true;
        loadScript();
    }
    else {
        click();
    }
})();
