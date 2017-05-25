var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
	firebase.auth().signInWithRedirect(provider);
}

firebase.auth().getRedirectResult().then(function(result) {
	// var user = firebase.auth().currentUser;
//    document.getElementById("sign_in_button").style.display = "none";
	user = result.user; 
	if((user != null) && (String(window.location.href).includes("PocketPantry")))  {
		window.location.replace("meal_planner.html");
	}
});