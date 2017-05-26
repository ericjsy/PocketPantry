$(document).ready(function() {
    $("#dropdown_toggle").on("click", "img, div", function(event) {
        $("#dropdown_content").stop().slideToggle("slow");
    });
});