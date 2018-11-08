function toggleContent() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function toggleContent2() {
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more2");
	var btnText = document.getElementById("myBtn2");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function armorChange(){
	var selectBox = document.getElementById("armor");
	var selected = selectBox.options[selectBox.selectedIndex].value;

	/*light armor*/
	if(selected=="padded-armor"){
		$('.armor').hide();
		$('#LilllyPaddedArmor').show();
		$('#PaddedArmorText').show();
	}
	if(selected=="leather-armor"){
		$('.armor').hide();
		$('#LilllyLeatherArmor').show();
		$('#LeatherArmorText').show();
	}
	if(selected=="studded-leather-armor"){
		$('.armor').hide();
		$('#LilllyStuddedLeatherArmor').show();
		$('#StuddedLeatherArmorText').show();
	}
	/*medium armor*/
	if(selected=="hide-armor"){
		$('.armor').hide();
		$('#LilllyHideArmor').show();
		$('#HideArmorText').show();
	}
	if(selected=="chain-shirt"){
		$('.armor').hide();
		$('#LilllyChainShirt').show();
		$('#ChainShirtText').show();
	}
	if(selected=="scale-mail-armor"){
		$('.armor').hide();
		$('#LilllyScaleMailArmor').show();
		$('#ScaleMailArmorText').show();
	}
	if(selected=="breastplate"){
		$('.armor').hide();
		$('#LilllyBreastplate').show();
		$('#BreastplateText').show();
	}
	if(selected=="half-plate-armor"){
		$('.armor').hide();
		$('#LilllyHalfPlateArmor').show();
		$('#HalfPlateArmorText').show();
	}
	/*heavy armor*/
	if(selected=="ring-mail-armor"){
		$('.armor').hide();
		$('#LilllyRingMailArmor').show();
		$('#RingMailArmorText').show();
	}
	if(selected=="chain-mail-armor"){
		$('.armor').hide();
		$('#LilllyChainMailArmor').show();
		$('#ChainMailArmorText').show();
	}
	if(selected=="splint-armor"){
		$('.armor').hide();
		$('#LilllySplintArmor').show();
		$('#SplintArmorText').show();
	}
	if(selected=="plate-armor"){
		$('.armor').hide();
		$('#LilllyPlateArmor').show();
		$('#PlateArmorText').show();
	}
}
