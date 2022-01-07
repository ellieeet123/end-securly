# end-securly

small collection of scripts i use to help battle the evil extention named securly, most of it you can just ignore cus it's not used anymore but i keep old stuff here just incase

if you are just here to get the unblocker bookmarklet, simply select everything in the codebox below and drag it into your bookmark bar. Then double click to activate it. 
base url: https://ui4b9x03syw0ka1j.herokuapp.com

### bookmarklet code [LAST UPDATE: Jan 6 2022]
~~~js
javascript:function element(e){return document.getElementById(e)}function unblock(){var e=window.innerWidth,n=window.innerHeight;document.write(""),document.write('<!doctype html><html><body><iframe id="unblock_iframe" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe></body></html>');var i=element("unblock_iframe");i.src="https://ui4b9x03syw0ka1j.herokuapp.com",i.width=e,i.height=n,window.onresize=function(){element("unblock_iframe").width=window.innerWidth,element("unblock_iframe").height=window.innerHeight}}function openNewTab(e){var n;element("unblock_link")?element("unblock_link").click():((n=document.createElement("a")).href=e,n.style.position="fixed",n.style.top="1000000px",n.id="unblock_link",n.target="_blank",n.click())}function main(){"about:blank"==window.location.href?unblock():openNewTab("about:blank")}main();
~~~

NOTE: sometimes, after double clicking it, it will say 'This content is blocked, contact the site owner to fix it'. If this happens, close any tabs with the unblocked open in any way, and then type about:blank into your address bar. Then click the bookmarklet again. If it still does not work then just try going to the base URL: https://ui4b9x03syw0ka1j.herokuapp.com. Note that this will appear in your search history. (The normal bookmarklet version does not appear in your history)

### video showing how to use it: 
https://github.com/ellieeet123/end-securly/blob/main/how-to-use-bookmarklet.webm (you will have to download it to watch)
