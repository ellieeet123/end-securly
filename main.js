javascript:var url = window.location.href;
if(window.location.href.startsWith('https://useast2-www.securly.com/')){
  var url = document.getElementById('blockDetails').children[1].children[1].innerHTML;
}
var w = window.innerWidth;
var h = window.innerHeight-30;
var c = `
<html><body><h1 style="font-family:arial;font-size:14px">Page URL: `+url+`</h1>
<iframe id="a" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe>
<scr`+`ipt>
var u='https://cy3u3kx1wg8o1rj2.herokuapp.com';
var a=document.getElementById("a");
document.getElementById("a").src=u;
a.width=w;
a.height=h;
</scr`+`ipt></body></html>
`;
document.write('');
document.write(c);
