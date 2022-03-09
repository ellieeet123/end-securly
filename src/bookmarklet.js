/*\ 
|*|  bookmarklet.js
|*|  
|*|  the main bookmarklet. It's main purpose
|*|  is just to injext the main script,
|*|  and then provide an error if it fails.
\*/

javascript:
(() => {
    document.addEventListener("securitypolicyviolation", err => {
        // error message if the site the user is trying to run the script
        // on a site that has a security policy disabling foreign scripts.
        if (
            confirm(
                '[ERROR]: ' + window.location.hostname + 
                ' has blocked inserting the necesary script for the unblocker.' + 
                ' To run it, press OK (this will open a new tab)' + 
                ' and then press the bookmarklet again. \n\nFull Security Policy: ' + 
                err.originalPolicy
            )
        ) {
            // opens a new tab to about:blank, so that a new proxy can be
            // opened there.
            var popupLink = document.createElement('a');
            popupLink.href = 'about:blank';
            popupLink.target = '_blank';
            popupLink.click();
            bookmarkletClicked = false;
        }
    });
    // check if the unblocker script already exists
    if (!document.querySelector('#_chicken_wing_')) {
        // the first time the bookmarklet is clicked, the script has
        // to be loaded first.
        var script = document.createElement('script');
        script.src = "https://ellieeet123.github.io/end-securly/src/unblocker.js";
        script.id = '_chicken_wing_'; // random name to hopefully avoid duplicate IDs in the DOM
        document.body.appendChild(script);
        // click() is a function from the inserted script, it starts the main menu UI.
        // this is run once the script is loaded.
        script.onload = () => {
            click();
        };
    }
    else {
        // immediately run the click function if script has already been loaded. 
        click();
    }
})();
