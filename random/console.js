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
  output.style.height = (innerWidth - 180).toString() + 'px';
  output.style.zIndex = '9999999999';
  output.id = 'ellieeet_console_output';
  output.style.color = '#fff';
  output.style.verticalAlign = 'bottom';
  output.style.fontFamily = 'monospace';
  output.style.overflow = 'scroll';

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
  header.innerHTML = '<div style="font-size: 24px;float:right"><b>ellieeet console</b></div>'

  let maindiv = document.createElement('div');
  maindiv.id = 'ellieeet_console_main';
  maindiv.appendChild(output);
  maindiv.appendChild(div);
  maindiv.appendChild(header);
  document.body.appendChild(maindiv);

  // new version of console.log
  console.log = function(msg, style) {
    document.getElementById('ellieeet_console_output').innerHTML += (
      '<span id="ellieeet_console_output_msg">' + msg.toString() + '</span><br>' + 
      '<div style="height:1px;background:#888"></div><br>'
    );
    document.getElementById('ellieeet_console_output_msg').style = style;
    document.getElementById('ellieeet_console_output_msg').removeAttribute('id');
  };
  window.onerror = function(message, source, lineno, colno, error) { 
    console.log(
      `[ERROR]: ${message}<br><br>line ${lineno}:${colno}<br>source: ${source}`, 
      'background: rgba(200, 0, 0, 0.2); color: #f00; padding: 1px;'
    );
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
      let commandoutput = e.click();
      console.log(command + '<br><span style="color:#17f">-></span> ' + commandoutput)
    }
    else if (event.keyCode === 38) { /* up arrow */
      historyIndex = historyIndex + 1;
      document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
    }
    else if (event.keyCode === 40) { /* down arrow */
      historyIndex = historyIndex - 1;
      document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
    }
    else if (event.keyCode === 27) { /* escape */
      document.getElementById('ellieeet_console_main').remove();
    }
  });
})();
