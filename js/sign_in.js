var provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
	firebase.auth().signInWithRedirect(provider);
}

/*
var signout = document.getElementById("signout");

signout.onclick = 
*/

var user = firebase.auth().currentUser;

if (user) {
	window.location.replace("meal_planner.html");
} else {
  // No user is signed in.
  console.log("Not logged in");
}

// firebase.auth().onAuthStateChanged(function(user) {
	// if (user) {
		// window.location.replace("meal_planner.html");
	// }
// });