// epic new browser js console, because my school blocks devtools on chromebooks 
// still a big wip

javascript:

if (window.ellieeet_console_isReady === undefined) {
  var ellieeet_console_isReady = false;
  var ellieeet_console_history = [];
  var ellieeet_console_isShiftPressed = false;
  var ellieeet_console_currentTab = 'console'
  var ellieeet_console_erroroutput = '';   // sets to true when the bookmarklet is clicked the first time,
} //                                     this is to prevent double event listeners from occuring
//  long name to hopefully prevent reusing a variable
//  name from a website that this would be run on.
(() => {
  function makeAButton(text, pageName, id) {
    let button = document.createElement('div');
    button.style.background = '#333';
    button.style.width = '100px';
    button.style.height = '15px';
    button.style.position = 'fixed';
    button.innerHTML = text;
    button.style.padding = '5px';
    button.style.top = '30px';
    button.style.textAlign = 'center';
    button.style.verticalAlign = 'middle';
    button.id = id;
    button.addEventListener('mouseenter', () => {
      button.style.background = '#fff';
      button.style.color = '#000';
    });
    button.addEventListener('mouseleave', () => {
      button.style.background = '#333';
      button.style.color = '#fff';
    });
    return button;
  }
  function splitElement(str) {
    /*
      Example Usage:
      splitElement('<p></p>')
      would return 
      ['<p>', '</p>']
    */
    var split = str.split('><');
    return [
      split[0] + '>',
      '<' + split[1]
    ]
  }
  function getDOM() {
    /*
    returns an html div element with a fancy layout of all current DOM
    elements that aren't inside the console.
    */
    var elements = document.getElementById('ellieeet_console_main').querySelectorAll('*');
    for (let i = 0; i < elements; i++) {
      if (!(elements[i].classList.contains('ellieeet_console_element'))) {
        elements[i].classList.add('ellieeet_console_element');
      }
    }
    var all = document.querySelectorAll('*');
    var output = '';
    for (let i = 0; i < all.length; i++) {
      if (!(all[i].classList.contains('ellieeet_console_element'))) {
        output += all[i].cloneNode().outerHTML + '\n';
      }
    }
    return output;
  }
  if (window.ellieeet_console_isopen) {
    console.warn('console already open');
  }
  else {
    window.ellieeet_console_isopen = true;

    // build the main UI
    let historyIndex = -1;
    let div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = '0px';
    div.style.right = '0px';
    div.style.padding = '8px';
    div.style.background = '#1a1a1a';
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
    output.style.background = '#1a1a1a';
    output.style.width = '600px';
    output.style.height = (innerHeight - 240).toString() + 'px';
    output.style.zIndex = '9999999999';
    output.id = 'ellieeet_console_output';
    output.style.color = '#fff';
    output.style.verticalAlign = 'bottom';
    output.style.fontFamily = 'monospace';
    output.style.overflow = 'scroll';
    output.style.fontSize = '13px';
    output.style.overflowWrap = 'break-word';
    // output.innerHTML = buildOutputPage('console');
    let dom = output.cloneNode(true);
    dom.id = 'ellieeet_console_dom';
    dom.style.display = 'none';
    let header = document.createElement('div');
    header.style.position = 'fixed';
    header.style.top = '0px';
    header.style.right = '0px';
    header.style.padding = '8px';
    header.style.background = '#1a1a1a';
    header.style.width = '600px';
    header.style.height = '50px';
    header.style.zIndex = '9999999999';
    header.style.fontFamily = 'monospace';
    header.style.borderBottomStyle = 'solid';
    header.style.borderWidth = '2px';
    header.style.borderBottomColor = '#bbb'
    header.id = 'ellieeet_console_header';
    header.style.color = '#fff';
    header.innerHTML = `<div style="font-size: 24px;float:right"><b>ellieeet console</b></div><div style="float:left; color:#c33"> x <div>`;
    let consoleButton = makeAButton('Console', 'console', 'ellieeet_console_console_button');
    consoleButton.style.right = '492px';
    consoleButton.addEventListener('click', () => {
      document.getElementById('ellieeet_console_output').style.display = 'block';
      document.getElementById('ellieeet_console_dom').style.display = 'none';
    });
    let DOMButton = makeAButton('DOM tree', 'dom', 'ellieeet_console_dom_button');
    DOMButton.style.right = '370px';
    DOMButton.addEventListener('click', () => {
      document.getElementById('ellieeet_console_output').style.display = 'none';
      document.getElementById('ellieeet_console_dom').style.display = 'block';
    });
    header.appendChild(consoleButton);
    header.appendChild(DOMButton);
    let style = document.createElement('style');
    style.innerHTML = '#ellieeet_console_output::-webkit-scrollbar {display: none;}';
    let maindiv = document.createElement('div');
    maindiv.id = 'ellieeet_console_main';
    maindiv.appendChild(output);
    maindiv.appendChild(dom);
    maindiv.appendChild(div);
    maindiv.appendChild(header);
    maindiv.appendChild(style);
    document.body.appendChild(maindiv);
    document.getElementById('ellieeet_console').focus();

    if (!ellieeet_console_isReady) {
      ellieeet_console_isReady = true;
      // new version of console.log
      console.log = function(msg, style, config) {
        let caller_line = (new Error).stack.split("\n")[4]
        document.getElementById('ellieeet_console_output').innerHTML += (
          '<span id="ellieeet_console_caller_line" style="font-size: 10px; float:right">' + caller_line + '</span><br>' +
          '<span id="ellieeet_console_output_msg"></span><br>' + 
          '<div id="ellieeet_console_line" style="height:1px;background:#888"></div>'
        );
        document.getElementById('ellieeet_console_output_msg').style = style;
        document.getElementById('ellieeet_console_output_msg').innerHTML = msg.toString();
        document.getElementById('ellieeet_console_output_msg').removeAttribute('id');
        if (config) {
          if (config.noline) {
            document.getElementById('ellieeet_console_line').remove()
          }
          else {
            document.getElementById('ellieeet_console_line').removeAttribute('id');
          }
          if (config.hideSrc) {
            document.getElementById('ellieeet_console_caller_line').remove()
          }
          else {
            document.getElementById('ellieeet_console_caller_line').removeAttribute('id');
          }
        }
        document.getElementById('ellieeet_console_output').scrollTop = document.getElementById('ellieeet_console_output').scrollHeight;
      };
      console.warn = function(msg) {
        console.log(
          '[WARN]: ' + msg,
          'background: rgba(200, 200, 0, 0.2); color: #ff0; padding: 1px;',
          {
            "hideSrc": true
          }
        )
      }
      console.debug, console.info = function(msg) {
        console.log(msg);
      }
      window.onerror = (message, source, lineno, colno) => {
        console.log(
          `[ERROR]: ${message}<br><br>line ${lineno}:${colno}<br>source: ${source}`, 
          'background: rgba(200, 0, 0, 0.2); color: #f00; padding: 1px;',
          {
            "hideSrc": true
          }
        );
      };
      console.codeOutput = function(command, output) {
        document.getElementById('ellieeet_console_output').innerHTML += (
          '<span id="ellieeet_console_command_input">' + command + '</span>' +
          '<br><span style="color:#17f">-> </span>' + 
          '<span id="ellieeet_console_command_output"></span>' +
          '<div id="ellieeet_console_line" style="height:1px;background:#888"></div>'
        );
        if (output === undefined) {
          output = 'undefined';
        }
        if (output === null) {
          output = 'null';
        }
        document.getElementById('ellieeet_console_command_output').innerText = output;
        document.getElementById('ellieeet_console_command_output').removeAttribute('id');
        document.getElementById('ellieeet_console_command_input').innerText = command;
        document.getElementById('ellieeet_console_command_input').removeAttribute('id');
        document.getElementById('ellieeet_console_line').removeAttribute('id');
        document.getElementById('ellieeet_console_output').scrollTop = document.getElementById('ellieeet_console_output').scrollHeight;
      };
      window.addEventListener('keydown', function(event) {
        console.log('keydown event');
        console.log(event.key);
        console.log(ellieeet_console_isShiftPressed);
        console.log(document.activeElement.id);
        // console.log(document.getElementById('ellieeet_console').textContent);
        if (
          event.key === 'Enter' &&
          !ellieeet_console_isShiftPressed &&
          document.activeElement.id === 'ellieeet_console'
        ) {
          event.preventDefault();
          let command = document.getElementById('ellieeet_console').innerText;
          ellieeet_console_history.unshift(command);
          document.getElementById('ellieeet_console').innerText = '';
          historyIndex = 0;
          // to do: try to allow this script to run on sites like github.com
          // where there is a security policy that prevents 'unsafe eval' 
          // from being used.
          try {
            var commandoutput = window.eval(command);
            console.codeOutput(command, commandoutput);
          }
          catch {
            console.log(
              command, 
              '', // no custom styles
              {
                "noline": true
              }
            );
            window.eval(command);
          }
        }
        else if (event.key === 'ArrowUp') {
          document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
          historyIndex = historyIndex + 1;
          if (ellieeet_console_history[historyIndex] === undefined) {
            historyIndex = historyIndex - 1;
            document.getElementById('ellieeet_console').value = document.getElementById('ellieeet_console').value
          }
        }
        else if (event.key === 'ArrowDown') {
          document.getElementById('ellieeet_console').textContent = ellieeet_console_history[historyIndex];
          historyIndex = historyIndex - 1;
          if (ellieeet_console_history[historyIndex] === undefined) {
            historyIndex = historyIndex + 1;
            document.getElementById('ellieeet_console').value = document.getElementById('ellieeet_console').value
          }
        }
        else if (event.key === 'Escape') {
          document.getElementById('ellieeet_console_main').remove();
          window.ellieeet_console_isopen = false;
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
    }
    // detect if the page has a security policy that disables console
    try {
      window.eval('void 0');
    }
    catch(e) {
      console.warn(
        location.hostname + 
        ' seems to have a Content Security Policy that disables window.eval(). ' + 
        'This will prevent the normal console from working, but you can still run statements from the address bar by ' + 
        'typing [ javascript:alert("hello") ] into the address bar. You can replace the alert statement with whatever code you want to run. ' +
        '<br><br>Full error report: ' + e
      );
    }
    setInterval(
      () => {
        if (ellieeet_console_isopen) {
          document.getElementById('ellieeet_console_dom').innerHTML = getDOM();
        }
      }, 
      1000
    )
  }
})();
