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
