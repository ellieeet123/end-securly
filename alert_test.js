javascript:
window.alert = function(content, closeMessage) {
  var gray = document.createElement('div');
  var message = document.createElement('div');
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  var width = document.body.clientWidth;
  var color = '#0070d0';
  var textColor = '#000000';
  var linkColor = '#ff0000';
  gray.style = `
    width: `+width+`px;
    height: `+height+`px;
    background: rgba(60,60,60,0.3);
    position: fixed;
    top: 0px;
    left: 0px;
  `;
  message.style = `
    width: `+ Math.round(width/3) +`px;
    height: `+ height-20 +`px;
    background: `+ color +`;
    position: fixed;
    right: 10px;
    top: 10px;
  `;
  gray.id = 'gray';
  message.id = 'message';
  message.innerHTML = content;
  document.body.appendChild(gray);
  document.body.appendChild(message);
  document.querySelector("#message h3").style.color = textColor;
  document.querySelector("message p").style.color = textColor;
  document.querySelector("message a").style.color = linkColor;
}
alert('<h1>Test</h1><br><p>hi</p>','Close');
