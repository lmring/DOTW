function backgroundChange(){
	var selectBox = document.getElementById("backgrounds");
	var selected = selectBox.options[selectBox.selectedIndex].value;

  if(selected=="acolyte"){
    $('.background').hide();
    $('#acolyteImage').show();
    $('#acolyteText').show();
  }
  if(selected=="charlatan"){
    $('.background').hide();
    $('#charlatanImage').show();
    $('#charlatanText').show();
  }
  if(selected=="criminal"){
    $('.background').hide();
    $('#criminalImage').show();
    $('#criminalText').show();
  }
  if(selected=="entertainer"){
    $('.background').hide();
    $('#entertainerImage').show();
    $('#entertainerText').show();
  }
  if(selected=="charlatan"){
    $('.background').hide();
    $('#charlatanImage').show();
    $('#charlatanText').show();
  }
  if(selected=="folk-hero"){
    $('.background').hide();
    $('#folkheroImage').show();
    $('#folkheroText').show();
  }
  if(selected=="guild-artisan"){
    $('.background').hide();
    $('#guildartisanImage').show();
    $('#guildartisanText').show();
  }
  if(selected=="hermit"){
    $('.background').hide();
    $('#hermitImage').show();
    $('#hermitText').show();
  }
  if(selected=="noble"){
    $('.background').hide();
    $('#nobleImage').show();
    $('#nobleText').show();
  }
  if(selected=="outlander"){
    $('.background').hide();
    $('#outlanderImage').show();
    $('#outlanderText').show();
  }
  if(selected=="sage"){
    $('.background').hide();
    $('#sageImage').show();
    $('#sageText').show();
  }
  if(selected=="sailor"){
    $('.background').hide();
    $('#sailorImage').show();
    $('#sailorText').show();
  }
  if(selected=="soldier"){
    $('.background').hide();
    $('#soldierImage').show();
    $('#soldierText').show();
  }
  if(selected=="urchin"){
    $('.background').hide();
    $('#urchinImage').show();
    $('#urchinText').show();
  }
}