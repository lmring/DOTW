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

    if(selected < 5 && selected > 0){
        $('#Strength1Hank').show();
				$('#Strength1HankImg').show();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').hide();
    }
		else if(selected < 9 && selected > 4){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').show();
				$('#Strength2Hank').show();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').hide();
    }
		else if(selected < 13 && selected > 8){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').hide();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').show();
				$('#Strength3HankImg').show();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').hide();
    }
		else if(selected < 17 && selected > 12){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').hide();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').show();
				$('#Strength5Hank').hide();
				$('#Strength5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Strength1Hank').hide();
				$('#Strength1HankImg').hide();
				$('#Strength2Hank').hide();
				$('#Strength3Hank').hide();
				$('#Strength3HankImg').hide();
				$('#Strength4Hank').hide();
				$('#Strength5Hank').show();
				$('#Strength5HankImg').show();
		}
}

function DexterityChange() {
    var selectBox = document.getElementById("dexterity");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Dexterity1Hank').show();
				$('#Dexterity1HankImg').show();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').show();
				$('#Dexterity2Hank').show();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').hide();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').show();
				$('#Dexterity3HankImg').show();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').hide();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').show();
				$('#Dexterity5Hank').hide();
				$('#Dexterity5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Dexterity1Hank').hide();
				$('#Dexterity1HankImg').hide();
				$('#Dexterity2Hank').hide();
				$('#Dexterity3Hank').hide();
				$('#Dexterity3HankImg').hide();
				$('#Dexterity4Hank').hide();
				$('#Dexterity5Hank').show();
				$('#Dexterity5HankImg').show();
		}
}

function ConstitutionChange() {
    var selectBox = document.getElementById("constitution");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Constitution1Hank').show();
				$('#Constitution1HankImg').show();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').show();
				$('#Constitution2Hank').show();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').hide();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').show();
				$('#Constitution3HankImg').show();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').hide();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').show();
				$('#Constitution5Hank').hide();
				$('#Constitution5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Constitution1Hank').hide();
				$('#Constitution1HankImg').hide();
				$('#Constitution2Hank').hide();
				$('#Constitution3Hank').hide();
				$('#Constitution3HankImg').hide();
				$('#Constitution4Hank').hide();
				$('#Constitution5Hank').show();
				$('#Constitution5HankImg').show();
		}
}

function IntelligenceChange() {
    var selectBox = document.getElementById("intelligence");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Intelligence1Hank').show();
				$('#Intelligence1HankImg').show();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').show();
				$('#Intelligence2Hank').show();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').hide();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').show();
				$('#Intelligence3HankImg').show();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').hide();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').show();
				$('#Intelligence5Hank').hide();
				$('#Intelligence5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Intelligence1Hank').hide();
				$('#Intelligence1HankImg').hide();
				$('#Intelligence2Hank').hide();
				$('#Intelligence3Hank').hide();
				$('#Intelligence3HankImg').hide();
				$('#Intelligence4Hank').hide();
				$('#Intelligence5Hank').show();
				$('#Intelligence5HankImg').show();
		}
}

function WisdomChange() {
    var selectBox = document.getElementById("wisdom");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Wisdom1Hank').show();
				$('#Wisdom1HankImg').show();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').show();
				$('#Wisdom2Hank').show();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').hide();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').show();
				$('#Wisdom3HankImg').show();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').hide();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').show();
				$('#Wisdom5Hank').hide();
				$('#Wisdom5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Wisdom1Hank').hide();
				$('#Wisdom1HankImg').hide();
				$('#Wisdom2Hank').hide();
				$('#Wisdom3Hank').hide();
				$('#Wisdom3HankImg').hide();
				$('#Wisdom4Hank').hide();
				$('#Wisdom5Hank').show();
				$('#Wisdom5HankImg').show();
		}
}

function CharismaChange() {
    var selectBox = document.getElementById("charisma");
    var selected = selectBox.options[selectBox.selectedIndex].value;

		if(selected < 5 && selected > 0){
				$('#Charisma1Hank').show();
				$('#Charisma1HankImg').show();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').hide();
		}
		else if(selected < 9 && selected > 4){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').show();
				$('#Charisma2Hank').show();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').hide();
		}
		else if(selected < 13 && selected > 8){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').hide();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').show();
				$('#Charisma3HankImg').show();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').hide();
		}
		else if(selected < 17 && selected > 12){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').hide();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').show();
				$('#Charisma5Hank').hide();
				$('#Charisma5HankImg').show();
		}
		else if(selected < 21 && selected > 16){
				$('#Charisma1Hank').hide();
				$('#Charisma1HankImg').hide();
				$('#Charisma2Hank').hide();
				$('#Charisma3Hank').hide();
				$('#Charisma3HankImg').hide();
				$('#Charisma4Hank').hide();
				$('#Charisma5Hank').show();
				$('#Charisma5HankImg').show();
		}
}
