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
ui4b9x03syw0ka1j [OLD]
ypzvq1aexoonl867 [OLD]
bmrxj5t98igyu0xx [OLD]
s36wcp57cb7ru7p4 [OLD]
gn6ih7aa0i5rdih7 [OLD]
cc8o9ffyjh3xvrbu [CURRENT - MAIN]
xhq2c04ncpk3ye7e [OLD]
xemhx53e5gumbva3 [OLD]
mhzwesscixgzlgr5 [OLD]
ymbbmgh8vxvyoxvd [CURRENT - PRINGLES]
brepqkc6d699hqh8
hrqa6iy6j6hn4fjm
lkuksuwh6fv4sbwz
x5qle09digpcxpuo
kbzcyqtytmem7w1e
r66s83p8qu2ppwqe
aqbmbz1ya33d8int
nh5sy1erayeeywd9
kr9q9xsmfknncgnb
e0of9obg9kokww0p
d8azkn3207529loi
mag62w29l7fjfxij
dx7texl356hgojgm
mo17av3g6o0bjljj
cjmaxnpj6pax9adq
ig91rxx6mfiku3va
mf3m9h4uwlfthcq3
mbh1g6ldx3dl7otx
up6llfg3ju6v1fcq
g3oijx6omw26iz10
h1wyq9dqz1ucai38
d78sxilfb1na9218
ce5z5nzouguc64ts
xwbogn73m0n509ly
nlvphp4z7gv2gbxr
gq2owdmp3g8860qp
mrr7u0w2h3mdvy33
npejniwowk2k9lii
yi98pv2c5qkqvhja
jq3edbzhn92wwnak
c922ndspkcy1zo8i
uf2asoi3v09koshm
nxflluucy2k1kklu
xzq43sdvydhygxae
a62zx7znbt9krnal
qtg5j3smbiaglh7q
fdjqvbqs5p588gn5
vqcl213flfm78t0f
hay6zlhk0sbgfnb7
j4pticrva4c8ryyd
lxcrqy6late8avp5
llrsgv9x9iqt0pn1
fbdh4rtj18ie13em
m7da2864jickwke1
e8il5zkxarxmul24
vaidifbrlvagasjy
whbdtcoqw6y1ebey
oarnktkfnlzplnzb
nuflc9u4i5car8sd
jkhfbdf9e9rnp83v
*/
