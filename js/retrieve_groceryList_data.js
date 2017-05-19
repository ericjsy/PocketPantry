db = firebase.database();
dbDays = db.ref().child('days');
dbMeals = db.ref().child('meals');
dbUser = dbDays.child('ryalia');

var planned_days = new Array();
var meal_collection = new Array();

var dairy_list = new Array();
var meat_list = new Array();
var fruit_veg_list = new Array();
var other_list = new Array();
var added_list = new Array();

function retrieve_grocerylist(startDate, endDate){
    find_planned_days(dayRange_to_array(startDate, endDate));
    return_categorized_groceryList();
}

function print(){
    for (i = 0; i < dairy_list.length; i++) {
        console.log("name: " + dairy_list[i].name + ", amount: " + dairy_list[i].amount + ", unit: " + dairy_list[i].unit)
    }
    for (i = 0; i < meat_list.length; i++) {
        console.log("name: " + meat_list[i].name + ", amount: " + meat_list[i].amount + ", unit: " + meat_list[i].unit)
    }
    for (i = 0; i < fruit_veg_list.length; i++) {
        console.log("name: " + fruit_veg_list[i].name + ", amount: " + fruit_veg_list[i].amount + ", unit: " + fruit_veg_list[i].unit)
    }
    for (i = 0; i < other_list.length; i++) {
        console.log("name: " + other_list[i].name + ", amount: " + other_list[i].amount + ", unit: " + other_list[i].unit)
    }
}

function return_categorized_groceryList(){
    var sorted_grocery_list = new Array();
    setTimeout(
        function() {
            for(i = 0; i < planned_days.length; i++){
                dbUser.child(planned_days[i]).once("value").then(date_snapshot => { //5_23
//                    console.log(date_snapshot.key);
                    date_snapshot.forEach(function(mealtime_snapshot) { //breakfast
//                        console.log(mealtime_snapshot.key);
                        dbMeals.child(mealtime_snapshot.key).once("value").then(meal_snapshot => { //meals -> breakfast
//                            console.log(meal_snapshot.key);
                            meal_snapshot.ref.child(mealtime_snapshot.val()).once("value").then(function(dish_snapshot) {
//                                console.log(ingredientList_snapshot.key);
                                dish_snapshot.forEach(function(ingredient_snapshot) {
                                    ingredient_snapshot.ref.child("type").once("value").then(function(type_snapshot) {
                                        ingredient_snapshot.ref.child("qty").once("value").then(function(qty_snapshot) {
                                            ingredient_snapshot.ref.child("unit").once("value").then(function(unit_snapshot) {
                                                var item = ingredient_snapshot.key;
                                                var qty = qty_snapshot.val();
                                                var unit = unit_snapshot.val();
                                                foo = {}; 
                                                foo["name"] = item; 
                                                foo["amount"] = qty; 
                                                foo["unit"] = unit; 
                                                switch(type_snapshot.val()){
                                                    case "dairy":
                                                        if(!checkIfItem_added(item, qty, dairy_list)){
                                                            dairy_list.push(foo);
                                                        } 
                                                        break;
                                                    case "meat":
                                                        if(!checkIfItem_added(item, qty, meat_list)){
                                                            meat_list.push(foo);
                                                        } 
                                                        break;
                                                    case "fruitveg":
                                                        if(!checkIfItem_added(item, qty, fruit_veg_list)){
                                                            fruit_veg_list.push(foo);
                                                        } 
                                                        break;
                                                    case "assorted":
                                                        if(!checkIfItem_added(item, qty, other_list)){
                                                            other_list.push(foo);
                                                        } 
                                                        break;
                                                }
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        },
        1000
    );
}

function checkIfItem_added(item, qty, category){
    for(i = 0; i < category.length; i++){
        if(category[i].name == item){
            category[i].amount += qty;
            return true;
        }
    }
    return false;
}

function find_planned_days(day_range){
    for(i = 0; i < day_range.length; i++){
        dbUser.child(day_range[i]).once("value").then(snapshot => {
            if(snapshot.exists()){
                var date = snapshot.key;
                planned_days.push(date);
            }
        });
    } 
}


function dayRange_to_array(startDate, endDate){
    var day_array = new Array();
    
    var dateRange = new Array();
    var str = startDate + "_" + endDate;
    dateRange = str.split("_");
    
    //start 
    var first_month_days = new Date(2017, dateRange[0], 0).getDate();;

    for(i = dateRange[1]; i <= first_month_days; i++){
        day_array.push(dateRange[0] + "_" + i);
    }
    
    //end
    var first_month_days = new Date(2017, dateRange[2], 0).getDate();;
    
    for(i = 1; i <= dateRange[3]; i++){
        day_array.push(dateRange[2] + "_" + i);
    }
    
    return day_array;
}

