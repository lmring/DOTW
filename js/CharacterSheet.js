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

/*background start*********************************************************/
var background = localStorage.getItem('background');
if(background){
  $("#background").html(background);
}

var backgroundResult = localStorage.getItem('backgroundResult');
if(backgroundResult){
  $("#background-features").html(backgroundResult);
}
/*background end********************************************************/

/*classes start********************************************************/
var charClass = localStorage.getItem('class');
if(charClass){
  $("#class").html(charClass);
}

var startHP = localStorage.getItem('startHP');
if(startHP){
  $("#startHP").html(startHP);
}

var savingThrows = localStorage.getItem('savingThrows');
if(savingThrows){
  $("#savingThrows").html(savingThrows);
}
/*classes end********************************************************/

/*skills start********************************************************/
var skills = localStorage.getItem('skills');
if(skills){
  $("#skills").html(skills);
}
/*skills end********************************************************/

/*races start********************************************************/
var race = localStorage.getItem('race');
if(race){
  $("#race").html(race);
}

var raceFeatures = localStorage.getItem('raceFeatures');
if(raceFeatures){
  $("#raceFeatures").html(raceFeatures);
}
/*races end********************************************************/

/*armor error checking start********************************************************/
var armortype = localStorage.getItem('armortype');

if(charClass=="sorcerer" || charClass=="wizard"){
  $("#noArmorNote").show();
}

if(armortype=="medium armor" && !(charClass=="barbarian" || charClass=="cleric" || charClass=="druid" || charClass=="fighter" || charClass=="paladin" || charClass=="ranger")){
  $("#armorErrorNote").show();
}

if(armortype=="heavy armor" && !(charClass=="fighter" || charClass=="paladin")){
  $("#armorErrorNote").show();
}
/*armor error checking end********************************************************/
