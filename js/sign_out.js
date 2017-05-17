function signOut() {

	firebase.auth().signOut().then(function() {
		
		console.log("Hello");
		window.location.replace("sign_in.html");
		
	}).catch(function(error) {		
		console.log("An error occurred with your login");
	});
}