// Setting tabs open on start	
var educational_tab_on = true;
var behavioral_tab_on = true;
var shopping_tab_on = true;

// Arrow change, open / close accordian
$(document).ready(function() {
	$("#expand_educational").click(function() {
		$("#educational_block").slideToggle("slow");
		if (educational_tab_on) {
			$("#expand_educational").html('Educational <img src="img/arrowDown.png" alt="collapse_arrow" height="52" width="72">');
			educational_tab_on = false;
		} else {
			$("#expand_educational").html('Educational <img src="img/arrowUp.png" alt="collapse_arrow" height="52" width="72">');
			educational_tab_on = true;
		}
	});
	$("#expand_behavioral").click(function() {
		$("#behavioral_block").slideToggle("slow");
		if (behavioral_tab_on) {
			$("#expand_behavioral").html('Behavioral <img src="img/arrowDown.png" alt="collapse_arrow" height="52" width="72">');
			behavioral_tab_on = false;
		} else {
			$("#expand_behavioral").html('Behavioral <img src="img/arrowUp.png" alt="collapse_arrow" height="52" width="72">');
			behavioral_tab_on = true;
		}
	});
	$("#expand_shopping").click(function() {
		$("#shopping_block").slideToggle("slow");
		if (shopping_tab_on) {
			$("#expand_shopping").html('Shopping <img src="img/arrowDown.png" alt="collapse_arrow" height="52" width="72">');
			shopping_tab_on = false;
		} else {
			$("#expand_shopping").html('Shopping <img src="img/arrowUp.png" alt="collapse_arrow" height="52" width="72">');
			shopping_tab_on = true;
		}
	});
});




