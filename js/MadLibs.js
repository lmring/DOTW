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
function weaponsMadLibs(){
  var selectBox = document.getElementById("weaponsMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var span = document.getElementById("weaponModifier");
  if(selected=="club"){
    span.textContent = "strength";
  }
  if(selected=="dagger"){
    span.textContent = "strength or dexterity";
  }
  if(selected=="greatclub"){
    span.textContent = "strength";
  }
  if(selected=="handaxe"){
    span.textContent = "strength";
  }
  if(selected=="javelin"){
    span.textContent = "strength";
  }
  if(selected=="light-hammer"){
    span.textContent = "strength";
  }
  if(selected=="mace"){
    span.textContent = "strength";
  }
  if(selected=="quarterstaff"){
    span.textContent = "strength";
  }
  if(selected=="sickle"){
    span.textContent = "strength";
  }
  if(selected=="spear"){
    span.textContent = "strength";
  }
  if(selected=="light-crossbow"){
    span.textContent = "dexterity";
  }
  if(selected=="dart"){
    span.textContent = "strength or dexterity";
  }
  if(selected=="shortbow"){
    span.textContent = "dexterity";
  }
  if(selected=="sling"){
    span.textContent = "dexterity";
  }
  if(selected=="battleaxe"){
    span.textContent = "strength";
  }
  if(selected=="flail"){
    span.textContent = "strength";
  }
  if(selected=="glaive"){
    span.textContent = "strength";
  }
  if(selected=="greataxe"){
    span.textContent = "strength";
  }
  if(selected=="greatsword"){
    span.textContent = "strength";
  }
  if(selected=="halberd"){
    span.textContent = "strength";
  }
  if(selected=="lance"){
    span.textContent = "strength";
  }
  if(selected=="longsword"){
    span.textContent = "strength";
  }
  if(selected=="maul"){
    span.textContent = "strength";
  }
  if(selected=="morningstar"){
    span.textContent = "strength";
  }
  if(selected=="pike"){
    span.textContent = "strength";
  }
  if(selected=="rapier"){
    span.textContent = "strength or dexterity";
  }
  if(selected=="scimitar"){
    span.textContent = "strength or dexterity";
  }
  if(selected=="shortsword"){
    span.textContent = "strength or dexterity";
  }
  if(selected=="trident"){
    span.textContent = "strength";
  }
  if(selected=="war-pick"){
    span.textContent = "strength";
  }
  if(selected=="warhammer"){
    span.textContent = "strength";
  }
  if(selected=="whip"){
    span.textContent = "strength or dexterity";
  }
  if(selected=="blowgun"){
    span.textContent = "dexterity";
  }
  if(selected=="hand-crossbow"){
    span.textContent = "dexterity";
  }
  if(selected=="heavy-crossbow"){
    span.textContent = "dexterity";
  }
  if(selected=="longbow"){
    span.textContent = "dexterity";
  }
}

function weaponsSave(){
  $("#weaponsSaveText").hide();
  var weaponSelectBox = document.getElementById("weaponsMadLibs");
  var weapon = weaponSelectBox.options[weaponSelectBox.selectedIndex].value;
    if(weapon=="light-hammer"){
      weapon = "light hammer";
      localStorage.setItem('weapon', weapon);
    }
    else if(weapon=="light-crossbow"){
      weapon = "light crossbow";
      localStorage.setItem('weapon', weapon);
    }
    else if(weapon=="war-pick"){
      weapon = "war pick";
      localStorage.setItem('weapon', weapon);
    }
    else if(weapon=="hand-crossbow"){
      weapon = "hand crossbow";
      localStorage.setItem('weapon', weapon);
    }
    else if(weapon=="heavy-crossbow"){
      weapon = "heavy crossbow";
      localStorage.setItem('weapon', weapon);
    }
    else{
      localStorage.setItem('weapon', weapon);
    }
  var newWeaponModRaw = document.getElementById("weaponModifier");
  var newWeaponMod = newWeaponModRaw.innerHTML;
  localStorage.setItem('weaponmod', newWeaponMod);
  $("#weaponsSaveText").show();
}
/*weapons end********************************************************/

/*armor start********************************************************/
function armorMadLibs(){
  var selectBox = document.getElementById("armorMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var spanAC = document.getElementById("armorclass");
  var spanExtras = document.getElementById("armorextras");
  if(selected=="padded-armor"){
    spanAC.textContent = "11 + my dexterity modifier";
    spanExtras.textContent = "I also have disadvantage to stealth rolls.";
  }
  if(selected=="leather-armor"){
    spanAC.textContent = "11 + my dexterity modifier";
    spanExtras.textContent = "";
  }
  if(selected=="studded-leather-armor"){
    spanAC.textContent = "12 + my dexterity modifier";
    spanExtras.textContent = "";
  }
  if(selected=="hide-armor"){
    spanAC.textContent = "12 + my dexterity modifier (with a maximum of +2)";
    spanExtras.textContent = "";
  }
  if(selected=="chain-shirt"){
    spanAC.textContent = "13 + my dexterity modifier (with a maximum of +2)";
    spanExtras.textContent = "";
  }
  if(selected=="scale-mail-armor"){
    spanAC.textContent = "14 + my dexterity modifier (with a maximum of +2)";
    spanExtras.textContent = "I also have disadvantage to stealth rolls.";
  }
  if(selected=="breastplate"){
    spanAC.textContent = "14 + my dexterity modifier (with a maximum of +2)";
    spanExtras.textContent = "";
  }
  if(selected=="half-plate-armor"){
    spanAC.textContent = "15 + my dexterity modifier (with a maximum of +2)";
    spanExtras.textContent = "I also have disadvantage to stealth rolls.";
  }
  if(selected=="ring-mail-armor"){
    spanAC.textContent = "14";
    spanExtras.textContent = "I also have disadvantage to stealth rolls.";
  }
  if(selected=="chain-mail-armor"){
    spanAC.textContent = "16";
    spanExtras.textContent = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 13 to use this armor.";
  }
  if(selected=="splint-armor"){
    spanAC.textContent = "17";
    spanExtras.textContent = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 15 to use this armor.";
  }
  if(selected=="plate-armor"){
    spanAC.textContent = "18";
    spanExtras.textContent = "I also have disadvantage to stealth rolls. I need a strength attribute of at least 15 to use this armor.";
  }
}

function armorSave(){
  $("#armorSaveText").hide();
  var armorSelectBox = document.getElementById("armorMadLibs");
  var armor = armorSelectBox.options[armorSelectBox.selectedIndex].value;
    if(armor=="padded-armor"){
      armor = "padded armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="leather-armor"){
      armor = "leather armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="studded-leather-armor"){
      armor = "studded leather armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="hide-armor"){
      armor = "hide armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="chain-shirt"){
      armor = "chain shirt";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="scale-mail-armor"){
      armor = "scale mail armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="half-plate-armor"){
      armor = "half plate armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="ring-mail-armor"){
      armor = "ring mail armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="chain-mail-armor"){
      armor = "chain mail armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="splint-armor"){
      armor = "splint armor";
      localStorage.setItem('armor', armor);
    }
    else if(armor=="plate-armor"){
      armor = "plate armor";
      localStorage.setItem('armor', armor);
    }
    else{
      localStorage.setItem('armor', armor);
    }
  var newACRaw = document.getElementById("armorclass");
  var newAC = newACRaw.innerHTML;
  localStorage.setItem('ac', newAC);
  var newAERaw = document.getElementById("armorextras");
  var newAE = newAERaw.innerHTML;
  localStorage.setItem('ae', newAE);
  $("#armorSaveText").show();
}
/*armor end*********************************************************/

/*backgrounds start********************************************************/
function backgroundsMadLibs(){
  var selectBox = document.getElementById("backgroundsMadLibs");
  var selected = selectBox.options[selectBox.selectedIndex].value;
  var span = document.getElementById("backgroundResult");
  if(selected=="acolyte"){
    span.textContent = "the skills Insight and Religion. I also know two additional languages of my choice.";
  }
  if(selected=="charlatan"){
    span.textContent = "the skills Deception and Sleight of Hand, disguise kits, and forgery kits.";
  }
  if(selected=="criminal"){
    span.textContent = "the skills Deception and Stealth, thieves' tools, and one type of gaming set.";
  }
  if(selected=="entertainer"){
    span.textContent = "the skills Acrobatics and Performance, disguise kits, and one type of musical instrument.";
  }
  if(selected=="folk-hero"){
    span.textContent = "the skills Animal Handling and Survival, land vehicles, and one type of artisan tools.";
  }
  if(selected=="guild-artisan"){
    span.textContent = "the skills Insight and Persuasion, and one type of artist's tools. I also know one additional language of my choice.";
  }
  if(selected=="hermit"){
    span.textContent = "the skills Medicine and Religion, and herbalism kits. I also know one additional language of my choice.";
  }
  if(selected=="noble"){
    span.textContent = "the skills History and Persuasion, and one type of gaming set. I also know one additional language of my choice.";
  }
  if(selected=="outlander"){
    span.textContent = "the skills Athletics and Survival, and one type of musical instrument. I also know one additional language of my choice.";
  }
  if(selected=="sage"){
    span.textContent = "the skills Arcana and History. I also know two additional languages of my choice.";
  }
  if(selected=="sailor"){
    span.textContent = "the skills Athletics and Perception, water vehicles, and navigator's tools.";
  }
  if(selected=="soldier"){
    span.textContent = "the skills Athletics and Intimidation, land vehicles, and one type of gaming set.";
  }
  if(selected=="urchin"){
    span.textContent = "the skills Sleight of Hand and Stealth, disguise kits, and thieves' tools.";
  }
}

function backgroundSave(){
  $("#backgroundSaveText").hide();
  var backgroundSelectBox = document.getElementById("backgroundsMadLibs");
  var background = backgroundSelectBox.options[backgroundSelectBox.selectedIndex].value;
    if(background=="folk-hero"){
      background = "folk hero";
      localStorage.setItem('background', background);
    }
    else if(background=="guild-artisan"){
      background = "guild artisan";
      localStorage.setItem('background', background);
    }
    else{
      localStorage.setItem('background', background);
    }
  var resultRaw = document.getElementById("backgroundResult");
  var result = resultRaw.innerHTML;
  localStorage.setItem('backgroundResult', result);
  $("#backgroundSaveText").show();
}
/*backgrounds end********************************************************/

/*classes start********************************************************/
