// JavaScript for the switcher control

function switchView() {
	// when the switcher drop-down is changed
	$("#views").change(function() {  
		// set the value variable equal that of the selected option
		var value = $("#views option:selected").val();
		// remove all possible classes from the body tag
		$("body").removeClass("sketchy").removeClass("annotations");
		// add the contents of the value variable as a class to the body tag
		$("body").addClass(value);
	});
}

// get this script ready to run
$(document).ready(switchView);