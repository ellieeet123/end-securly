javascript:
(function() {
    function loadScript() {
        document.addEventListener("securitypolicyviolation", (e) => {
            if (confirm('[ERROR]: ' + window.location.hostname + 
            ' has blocked inserting the necesary script for the unblocker. Would you like to open a blank tab to run it instead? (you will have to double click the bookmarklet again.) - Full Error Report: '
            + e)) {
                var a = document.createElement('a');
                a.href = 'about:blank';
                a.target = '_blank';
                a.click()
            }
        });
        var script = document.createElement('script');
        script.src = "https://ellieeet123.github.io/end-securly/unblocker.js";
        script.id = 'unblockerscript';
        document.body.appendChild(script);
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
