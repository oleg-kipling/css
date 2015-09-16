$(document).ready(function() {

	$("check").click(function() {

		$(".orbital").addClass("clickAnim");
		$("#three").addClass("secondaryMove");
		$("#four").addClass("secondaryMovetwo");
		$(".orbital").addClass("finalAnim");
		$("#two").remove();
	});

});