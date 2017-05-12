$(document).ready(function() {
    var meal_time_title = true;
    var meal_option_tab = false;
    var edit_meal = "";
    if ($(window).width() > 600) {
        $("#calendar").on("click", "td", function(event) {  
          $("#calendar").find('*').removeClass('selected_date');
          $(event.target).addClass('selected_date');
        });
        $("#calendar").on("click", "td", function() {
            $("#meal_builder").css("display", "inline");
        });
        $("#PC_exit").on("click", function() {
            $("#meal_builder").css("display", "none");
        });
        $("#meal_time_block, #meal_option").on("click", "h1.add_sign, img", function(event) {
            if (meal_time_title) {
                switch (event.target.id) {
                    case 'breakfast':
                        $("#meal_time_title").html("Breakfast");
                        edit_meal = "breakfast";
                        console.log('breakfast');
                        connectMeal('breakfast');
                        break;
                    case 'lunch':
                        $("#meal_time_title").html("Lunch");
                        edit_meal = "lunch";
                        console.log('lunch');
                        connectMeal('lunch');
                        break;
                    case 'dinner':
                        $("#meal_time_title").html("Dinner");
                        edit_meal = "dinner";
                        console.log('dinner');
                        connectMeal('dinner');
                        break;
                }
                /* Show meal time */
                $("#default_title").animate({
                    right: '100%'
                }, "slow");
                $("#meal_time_title").animate({
                    left: '0'
                }, "slow");
                $("#meal_option").slideToggle("slow").css("display", "flex");
                meal_time_title = false;
            } else {
                 if((event.target.id != "breakfast") && (event.target.id != "lunch") && (event.target.id != "dinner")){
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
                $("#meal_option").slideToggle("slow");
                meal_time_title = true;
                }
            }
        });
        $("#breakfast_remove, #lunch_remove, #dinner_remove").on("click", function(event) {
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
            console.log(event.target.id);
        });
    } else {
        $("#calendar").on("click", "td", function(event) {  
          $("#calendar").find('*').removeClass('selected_date');
          $(event.target).addClass('selected_date');
        });
        $("#meal_time_block, #meal_option").on("click", "img, h2.title_overlay", function(event) {
            if (meal_time_title) {
                switch (event.target.id) {
                    case 'breakfast':
                        $("#meal_time_title").html("Breakfast");
                        edit_meal = "breakfast";
                        console.log('breakfast');
                        connectMeal('breakfast');
                        break;
                    case 'lunch':
                        $("#meal_time_title").html("Lunch");
                        edit_meal = "lunch";
                        console.log('lunch');
                        connectMeal('lunch');
                        break;
                    case 'dinner':
                        $("#meal_time_title").html("Dinner");
                        edit_meal = "dinner";
                        console.log('dinner');
                        connectMeal('dinner');
                        break;
                }
                /* Show meal time */
                $("#default_title").animate({
                    right: '100%'
                }, "slow");
                $("#meal_time_title").animate({
                    left: '0'
                }, "slow");
                /* hide Breakfast Lunch Dinner */
                $("#meal_time_block").slideToggle("slow");
                /* show meal option */
                $("#meal_option").slideToggle("slow");
                meal_time_title = false;
            } else {
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
                /* show Breakfast Lunch Dinner */
                $("#meal_time_block").slideToggle("slow");
                /* hide meal option */
                $("#meal_option").slideToggle("slow");
                meal_time_title = true;
            }
        });
        $("#breakfast_remove, #lunch_remove, #dinner_remove").on("click", function(event) {
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
            console.log(event.target.id);
        });
    }
});