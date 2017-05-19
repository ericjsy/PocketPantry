// var db;
// var dbGl;
// var dbGlUser;
// var dbDate;
// var dbGrocerlyList;
// var dbIngredient;
// var dbIngredients_record;

//Connect user
function findmeals(){
    // db = firebase.database();
    // dbGL = db.ref().child('GL');
    // dbIngredient = db.ref().child('ingredient');
    // dbGLUser = dbGL.child('ryalia');
    // dbDate = dbGLUser.child("date");
    // dbGrocerlyList = dbGLUser.child("grocery_list")
	
	
	var dateRange = ["6_8", "6_9"];    
	
	var db = firebase.database(); // GO TO DATABASE
	var dbDays = db.ref().child('days'); // GO TO DAYS
    var dbUser = dbDays.child("ryalia"); // GO TO RYALIA
	
	var dbGL = db.ref().child('groceryLists'); // GO TO GROCERYLISTS
	var dbGLUser = dbGL.child('ryalia');	// GO TO RYALIA
	var dbmpadd = dbGLUser.child('mp_add'); // GO TO MP_ADD
	
	var dbMeals = db.ref().child("meals"); // GO TO MEALS

	var ingredients = [];
	
	for(i = 0; i < dateRange.length; i++) {
	
			dbUser.child(dateRange[i]).once("value").then(date_snapshot => { // LOOP THROUGH DATE (MP BRANCH) // Promise here
				date_snapshot.forEach(meal_snapshot => { // FOR EACH BREAKFAST, LUNCH, DINNER IN 
					// console.log("i: " + i);
					
					var meal = meal_snapshot.val(); // GET PANCAKE
					// console.log("meal: " + meal); //SPIT PANCAKE
					
					var dbTime = dbMeals.child(meal_snapshot.key); // GO TO BREAKFAST (MEALS BRANCH)
					var dbDish = dbTime.child(meal_snapshot.val()); // GO TO PANCAKE
					// console.log("i: " + i);
					dbTime.child(meal_snapshot.val()).once("value").then(ingr_snapshot => {
						ingr_snapshot.forEach(ingredient => {
							var ingr = ingredient.child("qty").key;
							var qty = ingredient.child("qty").val();
							// console.log(ingredient.key + ": " + qty); //(2, 2, 1.5)
							
							ingredients.push("" + ingredient.key + " " + qty);
							// console.log(ingredients);
						});
					});
					
					var dbDate = dbmpadd.child("6_8"); // GO TO DATE (GROCERYLIST BRANCH)
					var dbType = dbDate.child("dairy"); // GO TO DAIRY
					// var dbIng = dbDate.child(ingr); // GO TO 
					// var dbQty = dbType.child("qty").exportVal();
					
				});
			});
		// console.log(i);
		/*
		promiseGrabQty.then(function() {
			console.log("i: " + i);
		});
		*/
		/*
		retrieveScore(score["ss"][i][10]).then(gameID => {
			console.log(gameID);
			let ref = gamesRef.child(gameID);
			ref.update({
				aScore: parseInt(score["ss"][i][5]),
				hScore: parseInt(score["ss"][i][7])
			});
		})
		*/
	}
	// console.log("Hi");
	console.log(ingredients);
}

onload = findmeals();
/*
var promise = new Promise((resolve, reject) => { 
	i++;
};
*/
/*
function db_categorize_Ingredient(startDate, endDate){

    var dateRange = ["6_8", "6_9"];    
	for(i = 0; i < dateRange.length; i++){
        dbDate.child(dateRange[i]).once("value").then(function(date_snapshot) {
            date_snapshot.forEach(function(meal_snapshot) {
                dbGrocerlyList.child(ingredient_snapshot.key).once('value', function(groceryList_item_snapshot) {   //
                    groceryList_item_snapshot.ref.child("type").once("value").then(function(groceryList_item_type_snapshot) {
                        console.log(groceryList_item_type_snapshot.val());
                    });
                });
            });
        });
    }
}
*/

/*
function db_categorize_Ingredient(startDate, endDate){
//        console.log("db_categorize_Ingredient called");
    var dateRange = ["5_24", "5_25"];
    for(i = 0; i < dateRange.length; i++){
        dbDate.child(dateRange[i]).once("value").then(function(date_snapshot) {                        
           date_snapshot.forEach(function(ingredient_snapshot) {                                                  
                dbIngredient.child(ingredient_snapshot.key).once("value").then(function(ingredient_item_snapshot) {  
                   ingredient_item_snapshot.ref.child("type").once("value").then(function(ingredient_item_type_snapshot) {
                        dbGrocerlyList.child(ingredient_item_type_snapshot.val()).once("value").then(function(groceryList_item_type_snapshot) {
                            groceryList_item_type_snapshot.ref.child(ingredient_snapshot.key).once("value").then(function(groceryList_item_snapshot) {
                                var sum = 0;
                                foo = {};
                                sum += ingredient_snapshot.val();
                                sum += groceryList_item_snapshot.val();
                                console.log(date_snapshot.key + ", " + ingredient_snapshot.key + ": " + ingredient_snapshot.val());
                                console.log(groceryList_item_snapshot.key + " " + groceryList_item_snapshot.val());
                                foo[ingredient_snapshot.key] = sum;
                                groceryList_item_type_snapshot.ref.update(foo);
                            });
                        });
                    });
                });
            });
        });
    }
}
*/