# end-securly

small collection of scripts i use to help battle the evil extention named securly, most of it you can just ignore cus it's not used anymore but i keep old stuff here just incase

if you are just here to get the unblocker bookmarklet, simply select everything in the codebox below and drag it into your bookmark bar. Then double click to activate it. 
base url: https://cc8o9ffyjh3xvrbu.herokuapp.com

### bookmarklet code [LAST UPDATE: 24 Jan 2022]
~~~js
javascript:(function(){var b;b?click():(b=!0,function(){document.addEventListener("securitypolicyviolation",c=>{if(confirm("[ERROR]: "+window.location.hostname+" has blocked inserting the necesary script for the unblocker. Would you like to open a blank tab to run it instead? (you will have to double click the bookmarklet again.) - Full Error Report: "+c.toString())){var d=document.createElement("a");d.href="about:blank",d.target="_blank",d.click(),b=!1}});var a=document.createElement("script");a.src="https://ellieeet123.github.io/end-securly/src/unblocker.js",a.id="unblockerscript",document.body.appendChild(a),a.onload=function(){click()}}())})();
~~~

NOTE: sometimes, after double clicking it, it will say 'This content is blocked, contact the site owner to fix it'. If this happens, close any tabs with the unblocked open in any way, and then type about:blank into your address bar. Then click the bookmarklet again. If it still does not work then just try going to the base URL: https://cc8o9ffyjh3xvrbu.herokuapp.com. Note that this will appear in your search history. (The normal bookmarklet version does not appear in your history)

### video showing how to use it: 
https://github.com/ellieeet123/end-securly/blob/main/how-to-use-bookmarklet.webm (you will have to download it to watch)
