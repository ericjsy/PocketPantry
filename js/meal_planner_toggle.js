$(document).ready(function() {
    var meal_time_title = true;
    var meal_option_tab = false;
    var affiliates_tab = false;
    var selectedDate = "";
    var edit_meal = "";
    //    if ($(window).width() > 600) {
    
    // Affiliates page navigation toggle
    $("#mobile_home_page_nav").on("click", "img", function() {
        if(!affiliates_tab){
            $("#mobile_home_page_nav").find('img').css({'background-color' : '#719c6e','box-shadow' : 'inset 0px 0px 10px rgba(0,0,0,0.5)'});
            affiliates_tab = true;
        } else {
            $("#mobile_home_page_nav").find('img').css({'background-color' : '#8DC289','box-shadow' : 'none'});
            affiliates_tab = false;
        }
        $("#affiliates").slideToggle("slow");
    });
    // PC Meal Planner edit mode exit
    $("#PC_exit").on("click", function() {
        $("#meal_builder").css("display", "none");
    });
    // Calendar td onclick show indication of date selected
    $("#calendar").on("click", "td", function(event) {
        $(selectedDate).removeClass('selected_date');
        $(event.target).addClass('selected_date');
        selectedDate = event.target;
        //Mobile - while in pre-set meal adding mode, if select other date (td), reset meal_time_block and meal_option to original //toggle state when meal selection mode is present
        if ($(window).width() < 600) {
          $("#meal_time_block").css("display", "inline");
          $("#meal_option").css("display", "none");
          meal_time_title = true;
          meal_option_tab = false;  
        } 
        //PC - edit mode pop up
        if ($(window).width() > 600) {
          $("#meal_builder").css("display", "inline");
        }
    });
    //Switching edit mode between pre-set meal adding mode & meal selection mode
    //boolean - meal_time_title
    $("#meal_time_block, #meal_option").on("click", "img", function(event) {
        // meal selection mode
        if (meal_time_title) {
            switch (event.target.id) {
                case 'breakfast':
                    $("#meal_time_title").html("Breakfast");
                    edit_meal = "breakfast";
                    connectMeal('breakfast');
                    break;
                case 'lunch':
                    $("#meal_time_title").html("Lunch");
                    edit_meal = "lunch";
                    connectMeal('lunch');
                    break;
                case 'dinner':
                    $("#meal_time_title").html("Dinner");
                    edit_meal = "dinner";
                    connectMeal('dinner');
                    break;
            }
            // Show meal time 
            $("#default_title").animate({
                right: '100%'
            }, "slow");
            $("#meal_time_title").animate({
                left: '0'
            }, "slow");
            //Mobile hide Breakfast Lunch Dinner 
            if ($(window).width() < 600) {
                $("#meal_time_block").slideToggle("slow");
            }
            // show meal option 
            // PC meal_option toggle
            if ($(window).width() > 600) {
                $("#meal_option").slideToggle("slow").css("display", "flex");
            }
            // Mobile meal_option toggle
            if ($(window).width() < 600) {
                $("#meal_option").slideToggle("slow");
            }
            meal_time_title = false;
        } else {
            // pre-set meal adding mode
            if ((event.target.id != "breakfast") && (event.target.id != "lunch") && (event.target.id != "dinner")) {
                addMeal(edit_meal, event.target.id);
                switch (edit_meal) {
                    case "breakfast":
                        $("#breakfast_remove").removeClass("hide").addClass("show");
                        break;
                    case "lunch":
                        $("#lunch_remove").removeClass("hide").addClass("show");
                        break;
                    case "dinner":
                        $("#dinner_remove").removeClass("hide").addClass("show");
                        break;
                }
                $("#default_title").animate({
                    right: '0'
                }, "slow");
                $("#meal_time_title").animate({
                    left: '100%'
                }, "slow");
                // Mobile show Breakfast Lunch Dinner 
                if ($(window).width() < 600) {
                    $("#meal_time_block").slideToggle("slow");
                }
                // hide meal option 
                $("#meal_option").slideToggle("slow");
                meal_time_title = true;
            }
        }
    });
    $("#breakfast_remove, #lunch_remove, #dinner_remove").on("click", function(event) {
        if(meal_time_title){
            switch (event.target.id) {
                case 'breakfast_remove':
                    $("#breakfast_remove").removeClass("show").addClass("hide");
                    break;
                case 'lunch_remove':
                    $("#lunch_remove").removeClass("show").addClass("hide");
                    break;
                case 'dinner_remove':
                    $("#dinner_remove").removeClass("show").addClass("hide");
                    removeMeal("dinner");
                    break;
            }
            removeMeal(event.target.id);
        }
    });
});