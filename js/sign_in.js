var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
	
	firebase.auth().signInWithRedirect(provider);
	/*
	firebase.auth().signInWithPopup(provider).then(function() {
		window.location.replace("meal_planner.html")
	});
	*/
}

firebase.auth().getRedirectResult().then(function(result) {
	// var user = firebase.auth().currentUser;
	user = result.user;
	if(user != null) {
		window.location.replace("meal_planner.html");
	}
});