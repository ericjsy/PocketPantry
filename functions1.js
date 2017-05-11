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

		const promise = auth.createUserWithEmailAndPassword(email, pass).then(
		function(user){
  			user.updateProfile({displayName: firstname});
			  	
		});
		
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
		
	});

		// LOG IN HERE
	btnLogin.addEventListener('click', e => {

		const auth = firebase.auth();
		const email = txtEmail.value;
		const pass = txtPassword.value;
		
		const promise = auth.signInWithEmailAndPassword(email, pass).then(function(user)
		{	
			alert("Login");
			alert(firebase.auth().currentUser.displayName);
		});
		
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

		

	});

	// LOG OUT HERE
	btnLogout.addEventListener('click', e => {
		
//		alert(firebase.auth().currentUser.displayName);
		alert("Logout");
		alert(firebase.auth().currentUser.displayName);
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