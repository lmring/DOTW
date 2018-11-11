/*attributes start*********************************************************/
function strMadLibs(){
  var selectBox = document.getElementById("strMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("strMadLibsResult");
  span.textContent = result;
}

function dexMadLibs(){
  var selectBox = document.getElementById("dexMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("dexMadLibsResult");
  span.textContent = result;
}

function conMadLibs(){
  var selectBox = document.getElementById("conMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("conMadLibsResult");
  span.textContent = result;
}

function intMadLibs(){
  var selectBox = document.getElementById("intMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("intMadLibsResult");
  span.textContent = result;
}

function wisMadLibs(){
  var selectBox = document.getElementById("wisMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("wisMadLibsResult");
  span.textContent = result;
}

function chaMadLibs(){
  var selectBox = document.getElementById("chaMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var resultRaw = (selected-10)/2;
  var result =  Math.floor(resultRaw);
  var span = document.getElementById("chaMadLibsResult");
  span.textContent = result;
}


function attributesSave(){
  $("#attributesSaveText").hide();
  /*strength*/
  var strSelectBox = document.getElementById("strMadLibs");
  var newStr = strSelectBox.options[strSelectBox.selectedIndex].value;
  localStorage.setItem('strvalue', newStr);
  var newStrModRaw = document.getElementById("strMadLibsResult");
  var newStrMod = newStrModRaw.innerHTML;
  localStorage.setItem('strmod', newStrMod);
  /*dexterity*/
  var dexSelectBox = document.getElementById("dexMadLibs");
  var newDex = dexSelectBox.options[dexSelectBox.selectedIndex].value;
  localStorage.setItem('dexvalue', newDex);
  var newDexModRaw = document.getElementById("dexMadLibsResult");
  var newDexMod = newDexModRaw.innerHTML;
  localStorage.setItem('dexmod', newDexMod);
  /*constitution*/
  var conSelectBox = document.getElementById("conMadLibs");
  var newCon = conSelectBox.options[conSelectBox.selectedIndex].value;
  localStorage.setItem('convalue', newCon);
  var newConModRaw = document.getElementById("conMadLibsResult");
  var newConMod = newConModRaw.innerHTML;
  localStorage.setItem('conmod', newConMod);
  /*intelligence*/
  var intSelectBox = document.getElementById("intMadLibs");
  var newInt = intSelectBox.options[intSelectBox.selectedIndex].value;
  localStorage.setItem('intvalue', newInt);
  var newIntModRaw = document.getElementById("intMadLibsResult");
  var newIntMod = newIntModRaw.innerHTML;
  localStorage.setItem('intmod', newIntMod);
  /*wisdom*/
  var wisSelectBox = document.getElementById("wisMadLibs");
  var newWis = wisSelectBox.options[wisSelectBox.selectedIndex].value;
  localStorage.setItem('wisvalue', newWis);
  var newWisModRaw = document.getElementById("wisMadLibsResult");
  var newWisMod = newWisModRaw.innerHTML;
  localStorage.setItem('wismod', newWisMod);
  /*charisma*/
  var chaSelectBox = document.getElementById("chaMadLibs");
  var newCha = chaSelectBox.options[chaSelectBox.selectedIndex].value;
  localStorage.setItem('chavalue', newCha);
  var newChaModRaw = document.getElementById("chaMadLibsResult");
  var newChaMod = newChaModRaw.innerHTML;
  localStorage.setItem('chamod', newChaMod);
  $("#attributesSaveText").show();
}
/*attributes end*********************************************************/

/*weapons start********************************************************/
function weaponsSave(){
  $("#weaponsSaveText").hide();
  var weaponSelectBox = document.getElementById("weapons");
  var weapon = weaponSelectBox.options[weaponSelectBox.selectedIndex].value;
    if(weapon=="club"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="dagger"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength or dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="greatclub"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="handaxe"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="javelin"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="light-hammer"){
      weapon = "light hammer";
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="mace"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="quarterstaff"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="sickle"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    if(weapon=="spear"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="light-crossbow"){
      weapon = "light crossbow";
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="dart"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength or dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="shortbow"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="sling"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="battleaxe"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="flail"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="glaive"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="greataxe"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="greatsword"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="halberd"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="lance"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="longsword"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="maul"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="morningstar"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="pike"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="rapier"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength or dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="scimitar"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength or dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="shortsword"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength or dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="trident"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="war-pick"){
      weapon = "war pick";
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="warhammer"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="whip"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "strength or dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="blowgun"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="hand-crossbow"){
      weapon = "hand crossbow";
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="heavy-crossbow"){
      weapon = "heavy crossbow";
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="longbow"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
    else if(weapon=="net"){
      localStorage.setItem('weapon', weapon);
      var newWeaponMod = "dexterity";
      localStorage.setItem('weaponmod', newWeaponMod);
    }
  $("#weaponsSaveText").show();
}
/*weapons end********************************************************/

/*armor start********************************************************/
function armorSave(){
  $("#armorSaveText").hide();
  var armorSelectBox = document.getElementById("armor");
  var armor = armorSelectBox.options[armorSelectBox.selectedIndex].value;
    if(armor=="padded-armor"){
      armor = "padded armor";
      localStorage.setItem('armor', armor);
      var newAC = "11 + my dexterity modifier";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls.";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="leather-armor"){
      armor = "leather armor";
      localStorage.setItem('armor', armor);
      var newAC = "11 + my dexterity modifier";
      localStorage.setItem('ac', newAC);
      var newAE = "";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="studded-leather-armor"){
      armor = "studded leather armor";
      localStorage.setItem('armor', armor);
      var newAC = "12 + my dexterity modifier";
      localStorage.setItem('ac', newAC);
      var newAE = "";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="hide-armor"){
      armor = "hide armor";
      localStorage.setItem('armor', armor);
      var newAC = "12 + my dexterity modifier (with a maximum of +2)";
      localStorage.setItem('ac', newAC);
      var newAE = "";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="chain-shirt"){
      armor = "chain shirt";
      localStorage.setItem('armor', armor);
      var newAC = "13 + my dexterity modifier (with a maximum of +2)";
      localStorage.setItem('ac', newAC);
      var newAE = "";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="scale-mail-armor"){
      armor = "scale mail armor";
      localStorage.setItem('armor', armor);
      var newAC = "14 + my dexterity modifier (with a maximum of +2)";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls.";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="breastplate"){
      armor = "breastplate";
      localStorage.setItem('armor', armor);
      var newAC = "14 + my dexterity modifier (with a maximum of +2)";
      localStorage.setItem('ac', newAC);
      var newAE = "";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="half-plate-armor"){
      armor = "half plate armor";
      localStorage.setItem('armor', armor);
      var newAC = "15 + my dexterity modifier (with a maximum of +2)";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls.";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="ring-mail-armor"){
      armor = "ring mail armor";
      localStorage.setItem('armor', armor);
      var newAC = "14";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls.";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="chain-mail-armor"){
      armor = "chain mail armor";
      localStorage.setItem('armor', armor);
      var newAC = "16";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 13 to use this armor.";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="splint-armor"){
      armor = "splint armor";
      localStorage.setItem('armor', armor);
      var newAC = "17";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 15 to use this armor.";
      localStorage.setItem('ae', newAE);
    }
    else if(armor=="plate-armor"){
      armor = "plate armor";
      localStorage.setItem('armor', armor);
      var newAC = "18";
      localStorage.setItem('ac', newAC);
      var newAE = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 15 to use this armor.";
      localStorage.setItem('ae', newAE);
    }
  $("#armorSaveText").show();
}
/*armor end*********************************************************/

/*backgrounds start********************************************************/


function backgroundSave(){
  $("#backgroundSaveText").hide();
  var backgroundSelectBox = document.getElementById("backgrounds");
  var background = backgroundSelectBox.options[backgroundSelectBox.selectedIndex].value;
    if(background=="acolyte"){
      localStorage.setItem('background', background);
      var result = "the skills Insight and Religion. I also know two additional languages of my choice.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="charlatan"){
      localStorage.setItem('background', background);
      var result = "the skills Deception and Sleight of Hand, disguise kits, and forgery kits.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="criminal"){
      localStorage.setItem('background', background);
      var result = "the skills Deception and Stealth, thieves' tools, and one type of gaming set.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="entertainer"){
      localStorage.setItem('background', background);
      var result = "the skills Acrobatics and Performance, disguise kits, and one type of musical instrument.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="folk-hero"){
      background = "folk hero";
      localStorage.setItem('background', background);
      var result = "the skills Animal Handling and Survival, land vehicles, and one type of artisan tools.";
      localStorage.setItem('backgroundResult', result);
    }
    else if(background=="guild-artisan"){
      background = "guild artisan";
      localStorage.setItem('background', background);
      var result = "the skills Insight and Persuasion, and one type of artist's tools. I also know one additional language of my choice.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="hermit"){
      localStorage.setItem('background', background);
      var result = "the skills Medicine and Religion, and herbalism kits. I also know one additional language of my choice.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="noble"){
      localStorage.setItem('background', background);
      var result = "the skills History and Persuasion, and one type of gaming set. I also know one additional language of my choice.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="outlander"){
      localStorage.setItem('background', background);
      var result = "the skills Athletics and Survival, and one type of musical instrument. I also know one additional language of my choice.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="sage"){
      localStorage.setItem('background', background);
      var result = "the skills Arcana and History. I also know two additional languages of my choice.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="sailor"){
      localStorage.setItem('background', background);
      var result = "the skills Athletics and Perception, water vehicles, and navigator's tools.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="soldier"){
      localStorage.setItem('background', background);
      var result = "the skills Athletics and Intimidation, land vehicles, and one type of gaming set.";
      localStorage.setItem('backgroundResult', result);
    }
    if(background=="urchin"){
      localStorage.setItem('background', background);
      var result = "the skills Sleight of Hand and Stealth, disguise kits, and thieves' tools.";
      localStorage.setItem('backgroundResult', result);
    }
  $("#backgroundSaveText").show();
}
/*backgrounds end********************************************************/

/*classes start********************************************************/
