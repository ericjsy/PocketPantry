$(document).ready(function() {
    $("#dropdown_toggle").on("click", "img", function(event) {
        $("#dropdown_content").stop().slideToggle("slow");
    });
});