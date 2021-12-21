/* [BOOKMARKLET] generates 16 character random string (ignore this pls)
   Used to generate names for heroku corrosion apps
   
*/

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
cy3u3kx1wg8o1rj2
hx9e06y07oekgvq0
ui4b9x03syw0ka1j
ypzvq1aexoonl867
bmrxj5t98igyu0xx
s36wcp57cb7ru7p4
gn6ih7aa0i5rdih7
cc8o9ffyjh3xvrbu
*/
