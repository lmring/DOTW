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

function StrengthChange() {
    var selectBox = document.getElementById("strength");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#StrengthLowHank').show();
				$('#StrengthLowHankImg').show();
				$('#StrengthMediumHank').hide();
				$('#StrengthMediumHankImg').hide();
				$('#StrengthHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#StrengthLowHank').hide();
				$('#StrengthLowHankImg').hide();
				$('#StrengthMediumHank').show();
				$('#StrengthMediumHankImg').show();
				$('#StrengthHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#StrengthLowHank').hide();
			$('#StrengthLowHankImg').hide();
			$('#StrengthMediumHank').hide();
			$('#StrengthMediumHankImg').hide();
			$('#StrengthHighHank').show();
			$('#StrengthHighHankImg').show();
		}
}

function DexterityChange() {
    var selectBox = document.getElementById("dexterity");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#DexterityLowHank').show();
				$('#StrengthLowHankImg').show();
				$('#DexterityMediumHank').hide();
				$('#StrengthMediumHankImg').hide();
				$('#DexterityHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#DexterityLowHank').hide();
				$('#StrengthLowHankImg').hide();
				$('#DexterityMediumHank').show();
				$('#StrengthMediumHankImg').show();
				$('#DexterityHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#DexterityLowHank').hide();
			$('#StrengthLowHankImg').hide();
			$('#DexterityMediumHank').hide();
			$('#StrengthMediumHankImg').hide();
			$('#DexterityHighHank').show();
			$('#StrengthHighHankImg').show();
		}
}

function ConstitutionChange() {
    var selectBox = document.getElementById("constitution");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#ConstitutionLowHank').show();
				$('#StrengthLowHankImg').show();
				$('#ConstitutionMediumHank').hide();
				$('#StrengthMediumHankImg').hide();
				$('#ConstitutionHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#ConstitutionLowHank').hide();
				$('#StrengthLowHankImg').hide();
				$('#ConstitutionMediumHank').show();
				$('#StrengthMediumHankImg').show();
				$('#ConstitutionHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#ConstitutionLowHank').hide();
			$('#StrengthLowHankImg').hide();
			$('#ConstitutionMediumHank').hide();
			$('#StrengthMediumHankImg').hide()
			$('#ConstitutionHighHank').show();
			$('#StrengthHighHankImg').show();
		}
}

function IntelligenceChange() {
    var selectBox = document.getElementById("intelligence");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#IntelligenceLowHank').show();
				$('#StrengthLowHankImg').show();
				$('#IntelligenceMediumHank').hide();
				$('#StrengthMediumHankImg').hide();
				$('#IntelligenceHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#IntelligenceLowHank').hide();
				$('#StrengthLowHankImg').hide();
				$('#IntelligenceMediumHank').show();
				$('#StrengthMediumHankImg').show();
				$('#IntelligenceHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#IntelligenceLowHank').hide();
			$('#StrengthLowHankImg').hide();
			$('#IntelligenceMediumHank').hide();
			$('#StrengthMediumHankImg').hide();
			$('#IntelligenceHighHank').show();
			$('#StrengthHighHankImg').show();
		}
}

function WisdomChange() {
    var selectBox = document.getElementById("wisdom");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#WisdomLowHank').show();
				$('#StrengthLowHankImg').show();
				$('#WisdomMediumHank').hide();
				$('#StrengthMediumHankImg').hide();
				$('#WisdomHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#WisdomLowHank').hide();
				$('#StrengthLowHankImg').hide();
				$('#WisdomMediumHank').show();
				$('#StrengthMediumHankImg').show();
				$('#WisdomHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#WisdomLowHank').hide();
			$('#StrengthLowHankImg').hide();
			$('#WisdomMediumHank').hide();
			$('#StrengthMediumHankImg').hide();
			$('#WisdomHighHank').show();
			$('#StrengthHighHankImg').show();
		}
}

function CharismaChange() {
    var selectBox = document.getElementById("charisma");
    var selected = selectBox.options[selectBox.selectedIndex].value;

    if(selected < 8 && selected > 0){
        $('#CharismaLowHank').show();
				$('#StrengthLowHankImg').show();
				$('#CharismaMediumHank').hide();
				$('#StrengthMediumHankImg').hide();
				$('#CharismaHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
    else if(selected < 14 && selected > 7){
        $('#CharismaLowHank').hide();
				$('#StrengthLowHankImg').hide();
				$('#CharismaMediumHank').show();
				$('#StrengthMediumHankImg').show();
				$('#CharismaHighHank').hide();
				$('#StrengthHighHankImg').hide();
    }
		else if(selected < 21 && selected > 13){
  		$('#CharismaLowHank').hide();
			$('#StrengthLowHankImg').hide();
			$('#CharismaMediumHank').hide();
			$('#StrengthMediumHankImg').show();
			$('#CharismaHighHank').show();
			$('#StrengthHighHankImg').show();
		}
}
