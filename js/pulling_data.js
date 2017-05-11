//breakfast lunch dinner init
function mealPlan(date){
    db = firebase.database();
    dbDays = db.ref().child('days');
    dbUser = dbDays.child('ryalia');
    dbDatePlan = dbUser.child(date);
    dbUser.once("value").then(function(snapshot) {
        if(snapshot.child(date).exists()){
            dbDatePlan = dbUser.child(date);
            console.log("true");
        } else {
            dbUser.child(date).set({
                breakfast: "null",
                lunch: "null",
                dinner: "null"
            });
            dbDatePlan = dbUser.child(date);
        }
    });
    
    dbBreakfast = dbDatePlan.child('breakfast');
    dbLunch = dbDatePlan.child('lunch');
    dbDinner = dbDatePlan.child('dinner');
    
    dbBreakfast.on('value', a => {
        document.getElementById("breakfast").src="img/" + a.val() + ".jpg";
    });
    dbLunch.on('value', a => {
        document.getElementById("lunch").src="img/" + a.val() + ".jpg";
    });
    dbDinner.on('value', a => {
        document.getElementById("dinner").src="img/" + a.val() + ".jpg";
    });
}
//breakfast lunch dinner options
function connectMeal(mealtime) {
    dbMeals = db.ref().child('meals');
    dbMealTime = dbMeals.child(mealtime);

    option = document.getElementById("meal_option");
    
    dbMealTime.on('value', a => {
        option.innerHTML = "";
        for (var groupID in a.val()) {
            console.log(groupID);
            option.innerHTML += "<div><img id='" + groupID + "' src='img/" + groupID + ".jpg" +"'><h1>" + groupID +"</h1></div>";
        }
    });
}
//remove meal
function removeMeal(remove_mealtime) {
    switch(remove_mealtime){
        case "breakfast_remove":
            dbDatePlan.update({ breakfast: "null" });
            document.getElementById("breakfast").src="";
            break;
        case "lunch_remove":
            dbDatePlan.update({ lunch: "null" });
            document.getElementById("lunch").src="";
            break;
        case "dinner_remove":
            dbDatePlan.update({ dinner: "null" });
            document.getElementById("dinner").src="";
            break;
    }
}
//add meal
function addMeal(mealtime, item) {
    console.log(item);
    picked = document.getElementById(item);
    switch(mealtime){
        case "breakfast":
            dbDatePlan.update({ breakfast: "" + item });
            document.getElementById("breakfast").src="img/" + item + ".jpg";
            break;
        case "lunch":
            dbDatePlan.update({ lunch: "" + item });
            document.getElementById("lunch").src="img/" + item + ".jpg";
            break;
        case "dinner":
            dbDatePlan.update({ dinner: "" + item });
            document.getElementById("dinner").src="img/" + item + ".jpg";
            break;
    }
}
