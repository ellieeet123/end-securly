/* [BOOKMARKLET] generates 16 character random string (ignore this pls) */

javascript:
function getRandStr(){
  var values = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var output = '';
  for (var i = 0; i < 16;i++) {
    output = output + values[Math.floor(Math.random()*values.length)];
  }
  return output;
}

alert(getRandStr());
