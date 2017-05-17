window.onload = firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  if (user != null) {
			user = firebase.auth().currentUser;
			name = user.displayName;
			uid = user.uid;
			//window.location.replace("meal_planner.html");
		}
	}
});


/*
firebase.auth().onAuthStateChanged(function(user) {

	if (user) {
		if (user != null) {
			user = firebase.auth().currentUser;
			name = user.displayName;
			uid = user.uid;
			//window.location.replace("meal_planner.html");
		}
	} else {
		console.log("Hi");
	}
});
*/
/*

.then(function() {
	if(user) {
		window.location.replace("meal_planner.html");
	} else {
		window.location.replace("sign_in.html");
	}
})

*/