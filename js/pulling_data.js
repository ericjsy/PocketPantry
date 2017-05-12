//breakfast lunch dinner init
function mealPlan(date){
	db = firebase.database();
	dbDays = db.ref().child('days');
	dbUser = dbDays.child('ryalia');
	dbDatePlan = dbUser.child(date);
    dbMeals = db.ref().child('meals');
	
	dbUser.once("value").then(function(snapshot) {
		console.log(date);
		if(snapshot.child(date).exists()){
			dbDatePlan = dbUser.child(date);
		} else {
			dbUser.child(date).set({
				breakfast: null,
				lunch: null,
				dinner: null
			});
			dbDatePlan = dbUser.child(date);
		}
	});

	dbBreakfast = dbDatePlan.child('breakfast');
	dbLunch = dbDatePlan.child('lunch');
	dbDinner = dbDatePlan.child('dinner');

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

//draw dots
function dotDraw(day_id){
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

	dbUser.on('value', a => {
		if(a.child(day_id).exists()){

		dotCheck = firebase.database().ref().child("days").child("ryalia").child(day_id);

		dotCheck.child('breakfast').once('value', b => {
			if(b.val() != null){
				console.log("Hi" + day_id);
				document.getElementById("b" + day_id).classList.remove('un_planned'); //
				document.getElementById("b" + day_id).classList.add('planned');
			} else {
				document.getElementById("b" + day_id).classList.remove('planned'); 
				document.getElementById("b" + day_id).classList.add('un_planned');
			}
		});
		
		dotCheck.child('lunch').once('value', b => {
			if(b.val() != null){
				document.getElementById("l" + day_id).classList.remove('un_planned'); //
				document.getElementById("l" + day_id).classList.add('planned');
			} else {
				document.getElementById("l" + day_id).classList.remove('planned'); 
				document.getElementById("l" + day_id).classList.add('un_planned');
			}
		});
		
		dotCheck.child('dinner').once('value', b => {
			if(b.val() != null){
				document.getElementById("d" + day_id).classList.remove('un_planned'); //
				document.getElementById("d" + day_id).classList.add('planned');
			} else {
				document.getElementById("d" + day_id).classList.remove('planned'); 
				document.getElementById("d" + day_id).classList.add('un_planned');
			}
			});	
		}
	});
}

//breakfast lunch dinner options
function connectMeal(mealtime) {
	dbMealTime = dbMeals.child(mealtime);
	meal_option = document.getElementById("meal_option");

	dbMealTime.once('value', a => {
		meal_option.innerHTML = "";
		
		for (var groupID in a.val()) {
			console.log(groupID);
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
	console.log("Meal chosen : " + item);
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
