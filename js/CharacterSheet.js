/*attributes start*********************************************************/
var strength = localStorage.getItem('strvalue');
if(strength){
  $("#strength").html(strength);
}

var strengthmod = localStorage.getItem('strmod');
if(strengthmod){
  $("#strengthmod").html(strengthmod);
}

var dexterity = localStorage.getItem('dexvalue');
if(dexterity){
  $("#dexterity").html(dexterity);
}

var dexteritymod = localStorage.getItem('dexmod');
if(dexteritymod){
  $("#dexteritymod").html(dexteritymod);
}

var constitution = localStorage.getItem('convalue');
if(constitution){
  $("#constitution").html(constitution);
}

var constitutionmod = localStorage.getItem('conmod');
if(constitutionmod){
  $("#constitutionmod").html(constitutionmod);
}

var intelligence = localStorage.getItem('intvalue');
if(intelligence){
  $("#intelligence").html(intelligence);
}

var intelligencemod = localStorage.getItem('intmod');
if(intelligencemod){
  $("#intelligencemod").html(intelligencemod);
}

var wisdom = localStorage.getItem('wisvalue');
if(wisdom){
  $("#wisdom").html(wisdom);
}

var wisdommod = localStorage.getItem('wismod');
if(wisdommod){
  $("#wisdommod").html(wisdommod);
}

var charisma = localStorage.getItem('chavalue');
if(charisma){
  $("#charisma").html(charisma);
}

var charismamod = localStorage.getItem('chamod');
if(charismamod){
  $("#charismamod").html(charismamod);
}
/*attributes end*********************************************************/

/*weapons start********************************************************/
var weapon = localStorage.getItem('weapon');
if(weapon){
  $("#weapon").html(weapon);
}

var weaponmod = localStorage.getItem('weaponmod');
if(weaponmod){
  $("#weaponmod").html(weaponmod);
}
/*weapons end*********************************************************/

/*armor start*********************************************************/
var armor = localStorage.getItem('armor');
if(armor){
  $("#armor").html(armor);
}

var ac = localStorage.getItem('ac');
if(ac){
  $("#ac").html(ac);
}

var ae = localStorage.getItem('ae');
if(ae){
  $("#ae").html(ae);
}
/*armor end*********************************************************/
