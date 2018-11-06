function lillyChange(){
  var selectBox = document.getElementById("weapons");
  var selected = selectBox.options[selectBox.selectedIndex].value;

  if(selected=="club"){
    $('.weapon').hide();
    $('#LilllyClub').show();
  }
  if(selected=="dagger"){
    $('.weapon').hide();
    $('#LilllyDagger').show();
  }
}
