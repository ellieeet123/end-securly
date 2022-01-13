javascript:
var history = [];
var historyIndex = 0;
var div = document.createElement('div');
div.style.position = 'fixed';
div.style.bottom = '0px';
div.style.left = '15px';
div.style.background = '#000';
div.style.width = '800px';
div.style.height = '60px';
div.id = 'ellieeet_console';
div.contentEditable = true;
div.style.color = '#fff';
document.body.appendChild(div);
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { /*enter*/
    event.preventDefault();
    var command = document.getElementById('ellieeet_console').textContent;
    history.unshift(command);
    document.getElementById('ellieeet_console').textContent = '';
    historyIndex = 0;
    eval(command);
  }
  else if (event.keyCode === 38) { /*up arrow*/
    document.getElementById('ellieeet_console').textContent = history[historyIndex];
    historyIndex = historyIndex + 1;
  }
});
