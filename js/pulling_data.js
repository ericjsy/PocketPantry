// No onload function in file

// Display current chosen meals or add meal (null) pic
function mealPlan(date){
	db = firebase.database();
	dbDays = db.ref().child('days');
	dbUser = dbDays.child('ryalia');

	dbDatePlan = dbUser.child(date); // Line required to initialize 
	//For below once-value arrow functions
	dbBreakfast = dbDatePlan.child('breakfast');
	dbLunch = dbDatePlan.child('lunch');
	dbDinner = dbDatePlan.child('dinner');
	
	//
	dbUser.once("value").then( () => {
		dbDatePlan = dbUser.child(date);
	});
	
	//db -> days -> user -> day -> b/l/d
	//.once detects value change
	//val() returns value
	//a.va() = null OR pancake
	
	//Remove & add toggle x in top right 	corner
	
	dbBreakfast.once('value', a => {
		if(a.val() != null) {
			$("#breakfast_remove").removeClass("hide").addClass("show");
		} else {
			$("#breakfast_remove").removeClass("show").addClass("hide");
		}
		document.getElementById("breakfast").src="img/" + a.val() + ".jpg";
	});
	dbLunch.once('value', a => {
		if(a.val() != null) {
			$("#lunch_remove").removeClass("hide").addClass("show");
		} else {
			$("#lunch_remove").removeClass("show").addClass("hide");
		}
		document.getElementById("lunch").src="img/" + a.val() + ".jpg";
	});
	dbDinner.once('value', a => {
		if(a.val() != null) {
			$("#dinner_remove").removeClass("hide").addClass("show");
		} else {
			$("#dinner_remove").removeClass("show").addClass("hide");
		}
		document.getElementById("dinner").src="img/" + a.val() + ".jpg";
	});
}

//Draw dots
function dotDraw(day_id){
	
	//Draws dots
	date = document.getElementById(day_id);
	date.innerHTML += 
	"<div class='dot_container'>" + 
		"<div id='" + 
			"b" + day_id + 
				"' class='dot un_planned'>&#9679;</div>" +
		"<div id='" + 
			"l" + day_id + 
				"' class='dot un_planned'>&#9679;</div>" +
		"<div id='" + 
			"d" + day_id + 
				"' class='dot un_planned'>&#9679;</div>" +
	"</div>";
	
	//Changes dot color
	dbUser.on('value', a => {
		dotCheck = dbUser.child(day_id);
		
		dotCheck.child('breakfast').once("value", b => {
			if(document.getElementById("b" + day_id) != null){
				if(b.val() != null){
					document.getElementById("b" + day_id).classList.remove('un_planned');
					document.getElementById("b" + day_id).classList.add('planned');
				} else {
					document.getElementById("b" + day_id).classList.remove('planned'); 
					document.getElementById("b" + day_id).classList.add('un_planned');
				}
			}
		});
		dotCheck.child('lunch').once('value', b => {
			if(document.getElementById("b" + day_id) != null){
				if(b.val() != null){
					document.getElementById("l" + day_id).classList.remove('un_planned');
					document.getElementById("l" + day_id).classList.add('planned');
				} else {
					document.getElementById("l" + day_id).classList.remove('planned'); 
					document.getElementById("l" + day_id).classList.add('un_planned');
				}
			}
		});
		dotCheck.child('dinner').once('value', b => {
			if(document.getElementById("b" + day_id) != null){
				if(b.val() != null){
					document.getElementById("d" + day_id).classList.remove('un_planned');
					document.getElementById("d" + day_id).classList.add('planned');
				} else {
					document.getElementById("d" + day_id).classList.remove('planned'); 
					document.getElementById("d" + day_id).classList.add('un_planned');
				}
			}
		});	
	});
}

//breakfast lunch dinner options
function connectMeal(mealtime) {
	dbMeals = db.ref().child('meals');
	dbMealTime = dbMeals.child(mealtime);
	meal_option = document.getElementById("meal_option");

	dbMealTime.once('value', a => {
		meal_option.innerHTML = "";
		
		for (var groupID in a.val()) {
			$('#meal_option').css('text-transform', 'capitalize');
			meal_option.innerHTML += "<div><img id='" + groupID + "' src='img/" + groupID + ".jpg" +"'><h1>" + groupID +"</h1></div>";
		}
	});
}

//remove meal
function removeMeal(remove_mealtime) {
	switch(remove_mealtime){
		case "breakfast_remove":
			dbDatePlan.update({ breakfast: null });
			document.getElementById("breakfast").src="img/null.jpg";
			break;
		case "lunch_remove":
			dbDatePlan.update({ lunch: null });
			document.getElementById("lunch").src="img/null.jpg";
			break;
		case "dinner_remove":
			dbDatePlan.update({ dinner: null });
			document.getElementById("dinner").src="img/null.jpg";
			break;
	}
}

//add meal
function addMeal(mealtime, item) {
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

