$(document).ready(function() {
    var meal_time_title = true;
    var meal_option_tab = false;
    var edit_meal = "";
    if ($(window).width() > 600) {
    //Add your javascript for large screens here 
    } else {
        $("#meal_time_block div img, #meal_time_block div h1, #meal_option div img").click(function(event) {
            if(meal_time_title){
                switch(event.target.id){
                    case 'breakfast':
                    case 'breakfast_add':
                        $("#meal_time_title").html("Breakfast"); 
                        edit_meal = "breakfast";
                        break;
                    case 'lunch':
                    case 'lunch_add':
                        $("#meal_time_title").html("Lunch");
                        edit_meal = "lunch";
                        break;
                    case 'dinner':
                    case 'dinner_add':
                        $("#meal_time_title").html("Dinner");
                        edit_meal = "dinner";
                        break;
                }
                /* Show meal time */
                $("#default_title").animate({right: '100%'}, "slow");
                $("#meal_time_title").animate({left: '0'}, "slow");
                /* hide Breakfast Lunch Dinner */
                $("#meal_time_block").slideToggle("slow");
                /* show meal option */
                $("#meal_option").slideToggle("slow");
                meal_time_title = false;
                console.log(event.target.id);
            } else {
                switch(edit_meal){
                    case "breakfast":
                        $("#breakfast_add").removeClass("show").addClass("hide");
                        $("#breakfast_remove").removeClass("hide").addClass("show");
                        break;
                    case "lunch":
                        $("#lunch_add").removeClass("show").addClass("hide");
                        $("#lunch_remove").removeClass("hide").addClass("show");
                        break;
                    case "dinner":
                        $("#dinner_add").removeClass("show").addClass("hide");
                        $("#dinner_remove").removeClass("hide").addClass("show");
                        break;
                }
                $("#default_title").animate({right: '0'}, "slow");
                $("#meal_time_title").animate({left: '100%'}, "slow");
                /* show Breakfast Lunch Dinner */
                $("#meal_time_block").slideToggle("slow");
                /* hide meal option */
                $("#meal_option").slideToggle("slow");
                meal_time_title = true;
                console.log(event.target.id);
            }
        });
        $("#breakfast_remove, #lunch_remove, #dinner_remove").click(function(event) {
            switch(event.target.id){
                case 'breakfast_remove':
                    $("#breakfast_add").removeClass("hide").addClass("show");
                    $("#breakfast_remove").removeClass("show").addClass("hide");
                    break;
                case 'lunch_remove':
                    $("#lunch_add").removeClass("hide").addClass("show");
                    $("#lunch_remove").removeClass("show").addClass("hide");
                    break;
                case 'dinner_remove':
                    $("#dinner_add").removeClass("hide").addClass("show");
                    $("#dinner_remove").removeClass("show").addClass("hide");
                    break;
            }
            console.log(event.target.id);
        });
    }
});