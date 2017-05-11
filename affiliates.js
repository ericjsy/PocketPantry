var educational_tab_on = true;
var behavioral_tab_on = true;
var awareness_tab_on = true;

$(document).ready(function() {
    $("#expand_educational").click(function() {
        $("#educational_block").slideToggle("slow");
        if (educational_tab_on) {
            educational_tab_on = false;
            $("#expand_educational").html("&#9660; Educational");
        } else {
            $("#expand_educational").html("&#9650; Educational");
            educational_tab_on = true;
        }
    });
	$("#expand_behavioral").click(function() {
        $("#behavioral_block").slideToggle("slow");
        if (behavioral_tab_on) {
            behavioral_tab_on = false;
            $("#expand_behavioral").html("&#9660; Behavioral");
        } else {
            $("#expand_behavioral").html("&#9650; Behavioral");
            behavioral_tab_on = true;
        }
    });
	$("#expand_awareness").click(function() {
        $("#awareness_block").slideToggle("slow");
        if (awareness_tab_on) {
            awareness_tab_on = false;
            $("#expand_awareness").html("&#9660; Awareness");
        } else {
            $("#expand_awareness").html("&#9650; Awareness");
            awareness_tab_on = true;
        }
    });
});




