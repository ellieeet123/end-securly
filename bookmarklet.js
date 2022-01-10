javascript:
(function() {
    function loadScript() {
        document.addEventListener("securitypolicyviolation", function() {
            alert('[ERROR] Security Violation')
            // add more here eventually
        })
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
