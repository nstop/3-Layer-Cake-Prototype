// This file contains a single master JavaScript function, using jQuery for effects specific to the demo web page.
// Effects will be ready to run when the page is loaded, thanks to JS in the index.html page <head>.

function setupThePage() {
	// when the details element is clicked,
	$("#details").click(function() {
		// hide that same element
		$(this).hide();
		// slowly animate an increase in height of the aside element to 185px
		$("aside").animate( { height:"185px" }, { queue:false, duration:1000 } );
		// fade in the offer element
		$("#offer").fadeIn();
	});
	
	// when the cursor is in the email field,
	$("#email").focusin(function() {
  		// add the hilite class to it
  		$(this).addClass("hilite");
	});
	
	// when the cursor is out of the email field,
	$("#email").focusout(function() {
		// remove the hilite class from it
  		$(this).removeClass("hilite");
	});
	
	// when the sign up form is submitted,
	$("#signup").submit(function() {
		// blank out the email field
		$("#email").val('');
		// show the confirm element, with the appropriate message
		$("#confirm").show().html("You have been added to our email list - thank you!");
		// now fade it out, slowly
		$(document).ready(function() {
			setTimeout(function(){
				$("#confirm").fadeOut("slow", function () {
					$("#confirm").hide();
				});
			}, 2000);
		});
		return false;
	});
	
}