// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	function projectClick(e) {
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
}
}

function change() {
    var selectBox = document.getElementById("strength");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#StrengthLowHank').show();
				$('#StrengthMediumHank').hide();
				$('#StrengthHighHank').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#StrengthLowHank').hide();
				$('#StrengthMediumHank').show();
				$('#StrengthHighHank').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#StrengthLowHank').hide();
			$('#StrengthMediumHank').hide();
			$('#StrengthHighHank').show();
		}
}

function change() {
    var selectBox = document.getElementById("dexterity");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#DexterityLowHank').show();
				$('#DexterityMediumHank').hide();
				$('#DexterityHighHank').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#DexterityLowHank').hide();
				$('#DexterityMediumHank').show();
				$('#DexterityHighHank').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#DexterityLowHank').hide();
			$('#DexterityMediumHank').hide();
			$('#DexterityHighHank').show();
		}
}

function change() {
    var selectBox = document.getElementById("constitution");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#ConstitutionLowHank').show();
				$('#ConstitutionMediumHank').hide();
				$('#ConstitutionHighHank').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#ConstitutionLowHank').hide();
				$('#ConstitutionMediumHank').show();
				$('#ConstitutionHighHank').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#ConstitutionLowHank').hide();
			$('#ConstitutionMediumHank').hide();
			$('#ConstitutionHighHank').show();
		}
}

function change() {
    var selectBox = document.getElementById("intelligence");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#IntelligenceLowHank').show();
				$('#IntelligenceMediumHank').hide();
				$('#IntelligenceHighHank').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#IntelligenceLowHank').hide();
				$('#IntelligenceMediumHank').show();
				$('#IntelligenceHighHank').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#IntelligenceLowHank').hide();
			$('#IntelligenceMediumHank').hide();
			$('#IntelligenceHighHank').show();
		}
}

function change() {
    var selectBox = document.getElementById("wisdom");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#WisdomLowHank').show();
				$('#WisdomMediumHank').hide();
				$('#WisdomHighHank').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#WisdomLowHank').hide();
				$('#WisdomMediumHank').show();
				$('#WisdomHighHank').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#WisdomLowHank').hide();
			$('#WisdomMediumHank').hide();
			$('#WisdomHighHank').show();
		}
}

function change() {
    var selectBox = document.getElementById("charisma");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#CharismaLowHank').show();
				$('#CharismaMediumHank').hide();
				$('#CharismaHighHank').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#CharismaLowHank').hide();
				$('#CharismaMediumHank').show();
				$('#CharismaHighHank').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#CharismaLowHank').hide();
			$('#CharismaMediumHank').hide();
			$('#CharismaHighHank').show();
		}
}
