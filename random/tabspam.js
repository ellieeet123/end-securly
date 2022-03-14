/* 
    Just for fun. 
    This is a small bookmarklet that will repeatedly open
    new tabs with a URL that you input. 

    Not able to go super quickly because chrome seems to
    have some sort of a tab popup rate limit thing. You 
    could still hang the browser by opening a resource
    intensive website.

    ========================================================
    =====  WARNING: THIS CAN HANG/CRASH YOUR COMPUTER  =====
    ===== DO NOT RUN IF YOU HAVE ANY UNSAVED WORK OPEN =====
    ========================================================
*/

javascript:
(() => {
    var url = prompt(
        'Enter the URL you want the new tabs to go to'
    );
    var rate = prompt(
        'Enter the delay (milliseconds) between new tabs being opened'
    );
    var maxtabs = prompt(
        'Enter the max amount of tabs to be opened (leave blank for no limit)'
    );
    try {
        rate = Number(rate);
        maxtabs = Number(maxtabs);
    }
    catch {
        alert('ERR: delay and max tabs must be numbers. 1 or both of them were not.');
        return;
    }
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    var i = 0;
    var interval = setInterval(
        () => {
            i ++;
            link.click();
            if (i > maxtabs && maxtabs !== '') {
                clearInterval(interval);
            }
        },
        rate
    )
})();
