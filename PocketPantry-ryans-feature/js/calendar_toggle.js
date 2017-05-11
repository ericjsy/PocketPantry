var calander_tab_on = true;

$(document).ready(function() {
	$("#expand_tab").click(function() {
		$("#calendar_container").slideToggle("slow");
		if (calander_tab_on) {
			calander_tab_on = false;
			$("#expand_tab").html("&#9660;");
		} else {
			$("#expand_tab").html("&#9650;");
			calander_tab_on = true;
		}
	});
});

//Background shifts during close. Unintended?