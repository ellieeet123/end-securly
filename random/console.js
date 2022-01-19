// epic new browser js console, because my school blocks devtools on chromebooks 
// still a big wip

javascript:
var ellieeet_console_history = []; 
//  long name to hopefully prevent reusing a variable 
//  name from a website that this would be run on. 
(function(){
  let historyIndex = -1;
  let div = document.createElement('div');
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

  let output = document.createElement('div');
  output.style.position = 'fixed';
  output.style.bottom = '0px';
  output.style.right = '15px';
  output.style.background = '#000';
  output.style.width = '400px';
  output.style.height = '260px';
  output.style.zIndex = '9999999999';
  output.id = 'ellieeet_console_output';
  output.contentEditable = false;
  output.style.color = '#fff';
  output.style.verticalAlign = 'bottom';
  document.body.appendChild(output);

  // new version of console.log
  console.log = function(msg) {
    document.getElementById('ellieeet_console_output').textContent += (msg.toString() + '<br>');
  };
  window.onerror = function(message, source, lineno, colno, error) { 
    alert(`[ERROR]: ${message}\n\nline ${lineno}:${colno}\nsource: ${source}\nerror: ${error}`);
  };
  
  window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { /* enter */
      event.preventDefault();
      let command = document.getElementById('ellieeet_console').textContent;
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
