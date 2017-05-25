var db;
var dbGl;
var dbGlUser;
var dbDate;
var dbGrocerlyList;
var dbIngredient;
var dbIngredients_record;

//Connect user
function db_connectGlUser(){
    db = firebase.database();
    dbGl = db.ref().child('GL');
    dbIngredient = db.ref().child('ingredient');
    dbGlUser = dbGl.child('ryalia');
    dbDate = dbGlUser.child("date");
    dbGrocerlyList = dbGlUser.child("grocery_list")
}

function db_categorize_Ingredient(startDate, endDate){
//        console.log("db_categorize_Ingredient called");
    var dateRange = ["5_24", "5_25"];
    for(i = 0; i < dateRange.length; i++){
        dbDate.child(dateRange[i]).once("value").then(function(date_snapshot) {                                     //5_24
            date_snapshot.forEach(function(ingredient_snapshot) {                                                   //5_24 -> egg
                dbGrocerlyList.child(ingredient_snapshot.key).once('value', function(groceryList_item_snapshot) {   //
                    groceryList_item_snapshot.ref.child("type").once("value").then(function(groceryList_item_type_snapshot) {
                        console.log(groceryList_item_type_snapshot.val());
                    });
                });
            });
        });
    }
}
//                dbIngredient.child(childSnapshot.key).child("type").once('value', function(grandChildSnapshot) {
//                    dbGrocerlyList.child(childSnapshot).child("type").once('value', function(superGrandChildSnapshot) {
//                        if(superGrandChildSnapshot.exists()){
//                            
//                        } else {
//                            
//                        }
//                    });
//                });

