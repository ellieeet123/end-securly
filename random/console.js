// epic new browser js console, because my school blocks devtools on chromebooks 
// still a big wip

javascript:
var ellieeet_console_history = []; 
//  long name to hopefully prevent reusing a variable 
//  name from a website that this would be run on. 
(function(){
  var historyIndex = -1;
  var div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.bottom = '0px';
  div.style.left = '15px';
  div.style.background = '#000';
  div.style.width = '800px';
  div.style.height = '60px';
  div.style.zIndex = '9999999999';
  div.id = 'ellieeet_console';
  div.contentEditable = true;
  div.style.color = '#fff';
  document.body.appendChild(div);

  // new version of console.log
  var logBackup = console.log;
  var logMessages = [];
  console.log = function() {
    logMessages.push.apply(logMessages, arguments);
    logBackup.apply(console, arguments);
    document.getElementById('ellieeet_console').textContent = logMessages[logMessages - 1];
  };
  window.onerror = function(message, source, lineno, colno, error) { 
    alert(`[ERROR]: ${message}\n\nline ${lineno}:${colno}\nsource: ${source}\nerror: ${error}`);
  };
  
  window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { /* enter */
      event.preventDefault();
      var command = document.getElementById('ellieeet_console').textContent;
      ellieeet_console_history.unshift(command);
      document.getElementById('ellieeet_console').textContent = '';
      historyIndex = 0;
      let e = document.createElement('p');

      // to do: try to allow this script to run on sites like github.com
      // where there is a security policy that prevents 'unsafe eval' 
      e.onclick = new Function(command);
      e.click();
    }
    else if (event.keyCode === 38) { /* up arrow */
      historyIndex = historyIndex + 1;
      document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
    }
    else if (event.keyCode === 40) { /* down arrow */
      historyIndex = historyIndex - 1;
      document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
    }
  });
})();
