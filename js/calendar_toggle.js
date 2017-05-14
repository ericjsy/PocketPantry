// Setting calendar open on start	
var calender_tab_on = true;

$(document).ready(function() {
	// Arrow change, open / close calendar
	$("#expand_tab").click(function() {
		$("#calendar_container").slideToggle("slow");
		if (calender_tab_on) {
			$("#expand_tab").html('<img src="img/arrowDown.png" alt="collapse_arrow" height="52" width="72">');
			calender_tab_on = false;
		} else {
			$("#expand_tab").html('<img src="img/arrowUp.png" alt="collapse_arrow" height="52" width="72">');
			calender_tab_on = true;
		}
	});
});

//Background shifts during close.