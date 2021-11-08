javascript:function xor(str) {
  return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
}
var url = window.location.href;
var newurl = xor(url);
var w = window.innerWidth;
var h = window.innerHeight-30;
var c = `
<html><body><h1 style="font-family:arial;font-size:14px">Page URL: `+url+`</h1>
<iframe id="a" height="6" width="6" frameborder="0" style="position:fixed;right:0px;bottom:0px;"></iframe>
<scr`+`ipt>
var u="c/" + xor(/^(http:\/\/|https:\/\/)/i.test(url) ? url : "https://" + url);
var a=document.getElementById("a");
document.getElementById("a").src="https://ellieeet123.herokuapp.com/"u;
a.width=w;
a.height=h;
</scr`+`ipt></body></html>
`;
document.write(c);
