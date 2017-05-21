window.onload = firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		if (user != null) {
			user = firebase.auth().currentUser;
			name = user.displayName;
			uid = user.uid;
			console.log("Welcome " + name);
			connectUser(uid);
			//window.location.replace("meal_planner.html");
		}
	}
	else {
		window.location.replace("sign_in.html");
	}
});

