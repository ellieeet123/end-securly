// small bookmarklet to open chrome permissions for the site you are currently visiting.
// possibly not finished i have to do more testing

javascript:
(function() {
    let host = window.location.hostname;
    let protocol = window.location.protocol;
    let baseSettingsURL = 'chrome://settings/content/siteDetails?site=';
    let URL = '';
    protocol = protocol.slice(0, -1);  // remove : from the end
    protocol += '%3A%2F%2F'; // adds :// to the end, but encoded in ascii
    URL += baseSettingsURL;
    URL += protocol;
    URL += host;
    
    let a = document.createElement('a');
    a.href = URL;
    a.target = '_blank';
    a.click();
})();
