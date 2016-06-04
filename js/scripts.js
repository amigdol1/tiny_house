$(document).ready(function() {
	$("#blanks").submit(function() {

		$var name = $("#name").val();
		$var price = $("input:radio[name=price]:checked").val();
		$var color_ext = $("#color_ext").val();
		$var color_int = $("#color_int").val();
	});
});