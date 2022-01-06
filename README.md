# end-securly

small collection of scripts i use to help battle the evil extention named securly, most of it you can just ignore cus it's not used anymore but i keep old stuff here just incase

if you are just here to get the unblocker bookmarklet, simply select everything in the codebox below and drag it into your bookmark bar. Then double click to activate it. 
base url: https://ui4b9x03syw0ka1j.herokuapp.com

### bookmarklet code [LAST UPDATE: Dec 22 2021]
~~~
javascript:function unblock(){var e=window.innerWidth,t=window.innerHeight;document.write(""),document.write('<!doctype html><html><body><iframe id="unblock_iframe" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe></body></html>');var n=document.getElementById("unblock_iframe");n.src="https://ui4b9x03syw0ka1j.herokuapp.com",n.width=e,n.height=t,window.onresize=function(){document.getElementById("unblock_iframe").width=window.innerWidth,document.getElementById("unblock_iframe").height=window.innerHeight}}function openNewTab(e){var t=document.createElement("a");t.href=e,t.style.position="fixed",t.style.top="1000000px",t.id="unblock_link",t.target="_blank",t.click()}"about:blank"==window.location.href?unblock():openNewTab("about:blank");
~~~

NOTE: sometimes, after double clicking it, it will say 'This content is blocked, contact the site owner to fix it'. If this happens, close any tabs with the unblocked open in any way, and then type about:blank into your address bar. Then click the bookmarklet again. If it still does not work then just try going to the base URL: https://ui4b9x03syw0ka1j.herokuapp.com. Note that this will appear in your search history. (The normal bookmarklet version does not appear in your history)

### video showing how to use it: 
https://github.com/ellieeet123/end-securly/blob/main/how-to-use-bookmarklet.webm (you will have to download it to watch)
