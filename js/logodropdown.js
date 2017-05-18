$(document).ready(function() {

var dropdown = false;

// Affiliates page navigation toggle
    $("#mobile_home_page_nav").on("click", "img", function() {
        if(!dropdown){
            $("#mobile_home_page_nav").find("img").css({'background-color' : '#719c6e','box-shadow' : 'inset 0px 0px 10px rgba(0,0,0,0.5)'});
            dropdown = true;
        } else {
            $("#mobile_home_page_nav").find("img").css({'background-color' : '#8DC289','box-shadow' : 'none'});
            dropdown = false;
        }
		//Change html, css & js
        $("#affiliates").slideToggle("slow");
		$("#signout").slideToggle("slow");
    });
});