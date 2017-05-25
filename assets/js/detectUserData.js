uid = "";

window.onload = firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		user = firebase.auth().currentUser;
		name = user.displayName;
		uid = user.uid;
		console.log("Welcome " + name);
		connectUser(uid);
	}
	else {
		if (String(window.location.href).includes("PocketPantry")) {
			window.location.replace("sign_in.html");
		}
	}
});

