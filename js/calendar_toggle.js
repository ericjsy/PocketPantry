var calander_tab_on = true;

$(document).ready(function() {
	$("#expand_tab").click(function() {
		$("#calendar_container").slideToggle("slow");
		if (calander_tab_on) {
			calander_tab_on = false;
			$("#expand_tab").html('<img src="img/Arrowdown.png" alt="collapse_arrow" height="52" width="72">');
		} else {
			$("#expand_tab").html('<img src="img/Arrowup.png" alt="collapse_arrow" height="52" width="72">');
			calander_tab_on = true;
		}
	});
});

//Background shifts during close. Unintended?