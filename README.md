# end-securly

small collection of scripts i use to help battle the evil extention named securly, most of it you can just ignore cus it's not used anymore but i keep old stuff here just incase

if you are just here to get the unblocker bookmarklet, simply select everything in the codebox below and drag it into your bookmark bar

### bookmarklet code [LAST UPDATE: Dec 21 2021]
~~~
javascript:function unblock(){var e=window.innerWidth,t=window.innerHeight;document.write(""),document.write('<!doctype html><html><body><iframe id="unblock_iframe" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe></body></html>');var i=document.getElementById("unblock_iframe");i.src="https://cy3u3kx1wg8o1rj2.herokuapp.com",i.width=e,i.height=t,window.onresize=function(){document.getElementById("unblock_iframe").width=window.innerWidth,document.getElementById("unblock_iframe").height=window.innerHeight}}"about:blank"==window.location.href?unblock():window.location.href="about:blank";
~~~
