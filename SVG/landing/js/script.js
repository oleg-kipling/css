$(document).ready(function() {

	$("#specs").click(function() {
		$("#initial-content").slideUp();
		$("#buy-container").slideUp();
		$("#overlay-container").css("display","block");
	});

	$("#buy").click(function() {
		$("#initial-content").slideUp();
		$("#overlay-container").slideUp();
		$("#buy-container").css("display", "block");
	});

});