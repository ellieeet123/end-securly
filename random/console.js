// epic new browser js console, because my school blocks devtools on chromebooks 
// still a big wip

javascript:
var ellieeet_console_history = [];
var ellieeet_console_isShiftPressed = false;
//  long name to hopefully prevent reusing a variable
//  name from a website that this would be run on.
(function(){
  let historyIndex = -1;
  let div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.bottom = '0px';
  div.style.right = '0px';
  div.style.padding = '8px';
  div.style.background = '#444';
  div.style.width = '600px';
  div.style.height = '100px';
  div.style.zIndex = '9999999999';
  div.style.fontFamily = 'monospace';
  div.style.borderTopStyle = 'solid';
  div.style.borderWidth = '2px';
  div.style.borderTopColor = '#bbb'
  div.id = 'ellieeet_console';
  div.contentEditable = true;
  div.style.color = '#fff';

  let output = document.createElement('div');
  output.style.position = 'fixed';
  output.style.top = '65px';
  output.style.right = '0px';
  output.style.padding = '8px';
  output.style.background = '#444';
  output.style.width = '600px';
  output.style.height = (innerHeight - 180).toString() + 'px';
  output.style.zIndex = '9999999999';
  output.id = 'ellieeet_console_output';
  output.style.color = '#fff';
  output.style.verticalAlign = 'bottom';
  output.style.fontFamily = 'monospace';
  output.style.overflow = 'scroll';
  output.style.fontSize = '13px';
  output.innerHTML = '<br>';

  let header = document.createElement('div');
  header.style.position = 'fixed';
  header.style.top = '0px';
  header.style.right = '0px';
  header.style.padding = '8px';
  header.style.background = '#444';
  header.style.width = '600px';
  header.style.height = '50px';
  header.style.zIndex = '9999999999';
  header.style.fontFamily = 'monospace';
  header.style.borderBottomStyle = 'solid';
  header.style.borderWidth = '2px';
  header.style.borderBottomColor = '#bbb'
  header.id = 'ellieeet_console_header';
  header.style.color = '#fff';
  header.innerHTML = `<div style="font-size: 24px;float:right">
  <b>ellieeet console</b>
  </div>
  <div style="float:left"> -- [esc] to close -- <div>`;

  let maindiv = document.createElement('div');
  maindiv.id = 'ellieeet_console_main';
  maindiv.appendChild(output);
  maindiv.appendChild(div);
  maindiv.appendChild(header);
  document.body.appendChild(maindiv);

  // new version of console.log
  console.i = function(msg, style) {
    let err = new Error();
    let stack = err.stack.toString().split(/\r\n|\n/);
    let caller_line = (new Error).stack.split("\n")[4]
    document.getElementById('ellieeet_console_output').innerHTML += (
      '<span style="font-size: 10px; float:right">' + caller_line + '</span><br>' +
      '<span id="ellieeet_console_output_msg">' + msg.toString() + '</span><br>' + 
      '<div style="height:1px;background:#888"></div>'
    );
    document.getElementById('ellieeet_console_output_msg').style = style;
    document.getElementById('ellieeet_console_output_msg').removeAttribute('id');
  };
  console.log, console.info, console.debug = undefined;

  window.onerror = function(message, source, lineno, colno, error) {
    if (
    message.includes('console.log') || 
    message.includes('console.info') || 
    message.includes('console.debug')) {
      
    }
    console.log(
      `[ERROR]: ${message}<br><br>line ${lineno}:${colno}<br>source: ${source}`, 
      'background: rgba(200, 0, 0, 0.2); color: #f00; padding: 1px;'
    );
  };
  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 && !ellieeet_console_isShiftPressed) { /* enter */
      event.preventDefault();
      let command = document.getElementById('ellieeet_console').textContent;
      ellieeet_console_history.unshift(command);
      document.getElementById('ellieeet_console').textContent = '';
      historyIndex = 0;
      // to do: try to allow this script to run on sites like github.com
      // where there is a security policy that prevents 'unsafe eval' 
      // from being used.
      let commandoutput = window.eval(command);
      console.log(command + '<br><span style="color:#17f">-></span> ' + commandoutput)
    }
    else if (event.key === 'ArrowUp') {
      historyIndex = historyIndex + 1;
      document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
    }
    else if (event.key === 'ArrowDown') {
      historyIndex = historyIndex - 1;
      document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
    }
    else if (event.key === 'Escape') {
      document.getElementById('ellieeet_console_main').remove();
    }
    else if (event.key === 'Shift') {
      ellieeet_console_isShiftPressed = true;
    }
  });
  window.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
      ellieeet_console_isShiftPressed = false;
    }
  });
})();
