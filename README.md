# end-securly

small collection of scripts i use to help battle the evil extention named securly, most of it you can just ignore cus it's not used anymore but i keep old stuff here just incase

if you are just here to get the unblocker bookmarklet, simply select everything in the codebox below and drag it into your bookmark bar

~~~
javascript:var url = window.location.href;if(window.location.href.startsWith('https://useast2-www.securly.com/')){  var url = document.getElementById('blockDetails').children[1].children[1].innerHTML;}var w = window.innerWidth;var h = window.innerHeight-30;var c = `<html><body><h1 style="font-family:arial;font-size:14px">Page URL: `+url+`</h1><iframe id="a" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe><scr`+`ipt>var u='https://ellieeet9.herokuapp.com';var a=document.getElementById("a");document.getElementById("a").src=u;a.width=w;a.height=h;</scr`+`ipt></body></html>`;document.write(c);
~~~
