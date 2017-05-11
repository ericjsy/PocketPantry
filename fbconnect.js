// Initialize Firebase
var config = {
	apiKey: "AIzaSyBQ8f73QsDqkHsm3MiJsexJ69kh9kwx8eo",
	authDomain: "first-firebase-c138f.firebaseapp.com",
	databaseURL: "https://first-firebase-c138f.firebaseio.com",
	projectId: "first-firebase-c138f",
	storageBucket: "first-firebase-c138f.appspot.com",
	messagingSenderId: "861006904812"
};

firebase.initializeApp(config);

	//Get elements
window.onload = function() {
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');

	// SIGN UP HERE
	btnSignUp.addEventListener('click', e => {

		const auth = firebase.auth();
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const firstname = txtFirstName.value;

		const promise = auth.createUserWithEmailAndPassword(email, pass);
		
		promise.catch(function(error) {

			var errorCode = error.code;
			if(errorCode === 'auth/email-already-in-use') {
				alert('E-mail already in use.');
			} else if(errorCode === 'auth/invalid-email') {
				alert('Invalid Email.')
			} else if(errorCode === 'auth/weak-password') {
				alert('Password must be longer than 6 characters.')
			}

		});
		
		firebase.auth().onAuthStateChanged(function(user) {
			if(user) {
				firebase.auth().currentUser.updateProfile({displayName: firstname});
			}
		});
	});

		// LOG IN HERE
	btnLogin.addEventListener('click', e => {

		const auth = firebase.auth();
		const email = txtEmail.value;
		const pass = txtPassword.value;
		
		const promise = auth.signInWithEmailAndPassword(email, pass);
		
		promise.catch(function(error) {

			var errorCode = error.code;
			if(errorCode === 'auth/invalid-email') {
				alert('Empty or invalid E-mail.');
			} else if(errorCode === 'auth/user-not-found') {
				alert('Account not found or password is incorrect.')
			} else if(errorCode === 'auth/wrong-password') {
				alert('Empty or wrong password.')
			}

		});

		window.location = "a.php";

	});

	// LOG OUT HERE
	btnLogout.addEventListener('click', e => {
		
//		alert(firebase.auth().currentUser.displayName);
		firebase.auth().signOut();
	});

	firebase.auth().onAuthStateChanged(firebaseUser => {
		
		if(firebaseUser) {
			document.getElementById('btnLogout').style.display = "block";
			document.getElementById('btnLogin').style.display = "none";			
		} else {
			document.getElementById('btnLogout').style.display = "none";
			document.getElementById('btnLogin').style.display = "block";
		}
	});
}