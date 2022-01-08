/* [BOOKMARKLET] generates 16 character random string (ignore this pls)
   Used to generate names for heroku corrosion apps
   
*/

javascript:
function getRandStr(){
  var values = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var output = values[Math.floor(Math.random()*25)];
  for (var i = 0; i < 15;i++) {
    output = output + values[Math.floor(Math.random()*values.length)];
  }
  return output;
}

alert(getRandStr());

/*  pre-generated:

cy3u3kx1wg8o1rj2 [OLD]
hx9e06y07oekgvq0 [OLD]
ui4b9x03syw0ka1j [CURRENT - MAIN]
ypzvq1aexoonl867 [OLD]
bmrxj5t98igyu0xx [CURRENT - PRINGLES]
s36wcp57cb7ru7p4
gn6ih7aa0i5rdih7
cc8o9ffyjh3xvrbu
*/
