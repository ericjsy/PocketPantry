//Connect user
function db_connectUser(username){
//    console.log("db_connectUser: " + username)
    db = firebase.database();
    dbDays = db.ref().child('days');
    dbUser = dbDays.child(username);
}

//Connect date
function db_connectDate(day_id){
//    console.log("db_connectDate: " + day_id);
    dbDate = dbUser.child(day_id); 
}

//Connect mealtime
function db_connectMealTime(mealtime){
//    console.log("db_connectMealTime: " + mealtime);
    dbMealTime = dbDate.child(mealtime);
}

//Connect mealoption
function db_connectMealOption(){
//    console.log("db_connectMealOption called");
    dbMealOption = db.ref().child('meals');
}

//Update the calendar status of that date
function db_calender_statusUpdate(){
//    console.log("db_calender_statusUpdate called");
    dbDate.once("value").then(function(snapshot) {
        var mealtime = ["breakfast", "lunch", "dinner"];
        for(i = 0 ; i < 3; i++){
            snapshot.ref.child(mealtime[i]).once("value").then(function(childSnapshot) {
                if(childSnapshot.val() != null){
                    document.getElementById(childSnapshot.key + "_" + snapshot.key).classList.remove('un_planned');
                    document.getElementById(childSnapshot.key + "_" + snapshot.key).classList.add('planned');   
                } else {
                    document.getElementById(childSnapshot.key + "_" + snapshot.key).classList.add('un_planned');
                    document.getElementById(childSnapshot.key + "_" + snapshot.key).classList.remove('planned');   
                }
            });
        }
    });
}

//Update meal selection mode image 
function db_mealPlanned_imageUpdate(){
//    console.log("db_mealPlanned_imageUpdate called");
    var mealtime = ["breakfast", "lunch", "dinner"];
    for(i = 0 ; i < 3; i++){
        dbDate.child(mealtime[i]).once("value").then(function(snapshot) {
            if(snapshot.val() != null){
                document.getElementById(snapshot.key + "_remove").classList.add('show'); 
            } else {
                document.getElementById(snapshot.key + "_remove").classList.remove('show'); 
            }
            document.getElementById(snapshot.key).src = "img/" + snapshot.val() + ".jpg";
        });
    }
}

//Update selected meal on firebase
function db_mealPlanned_mealUpdate(mealtime, mealoption){
//    console.log("db_mealPlanned_mealUpdate called");
    foo = {}; 
    foo[mealtime] = mealoption; 
    dbDate.update(foo);
}

//Remove selected meal on firebase
function db_mealPlanned_mealRemove(mealtime){
//    console.log("db_mealPlanned_mealRemove called");
    foo = {}; 
    foo[mealtime] = null; 
    dbDate.update(foo);
}

//Update meal option
function db_mealPlanned_optionUpdate(mealtime){
//    console.log("db_mealPlanned_optionUpdate called");
    meal_option = document.getElementById("meal_option");
    meal_option.innerHTML = "";
    dbMealOption.child(mealtime).once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            meal_option.innerHTML += "<div><img id='" + childSnapshot.key + "' src='img/" + childSnapshot.key + ".jpg" +"'><h1>" + childSnapshot.key +"</h1></div>";
            $('#meal_option').css('text-transform', 'capitalize');
        });
    }); 
}

