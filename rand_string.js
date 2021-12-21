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

/*
2cy3u3kx1wg8o1rj
hx9e06y07oekgvq0
ui4b9x03syw0ka1j
867ypzvq1aexoonl
bmrxj5t98igyu0xx
s36wcp57cb7ru7p4
7gn6ih7aa0i5rdih
cc8o9ffyjh3xvrbu
*/
