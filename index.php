<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>GETTING STARTED WITH BRACKETS</title>

	<script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
	<script src="Rtest2.js"></script>
	<script src="Rtest3.js"></script>
</head>
<body>
	<pre id="text1"></pre>
	<pre id="text2"></pre>
	<pre id="text3"></pre>

	<script>
		//Selecting database
		db = firebase.database();
		//Selecting Users
		dbUsers = db.ref().child('Users');
		//Selecting user's mealplan
		dbUsersMP = dbUsers.child('MP');
		dbUser = dbUsers.child('ListofUsers');
		dbUsersMP = dbUsers.child('User');

		//Selecting child 1 using .on('value') //Ignore "a" and arrow funtion =>
		dbUsers.child("1").on('value', a => {

			//Outputs using JSON formatting
			document.getElementById('text1').innerHTML = JSON.stringify(a.val(), null, );

			//Creating list to append
			var list = "";

			//Going through all of "1" and finding their key(groupID) & value(a.val()[groupID]) pair
			for (var groupID in a.val()) {
				list = list.concat("", groupID, " ", a.val()[groupID], "\n");
			}
			//Outputs using JSON formatting
			document.getElementById('text2').innerHTML = list;
		});

		//Creates 3 children in dbUsers with empty fields
		for(var x = 0; x<3; x++) {
			dbUsers.child(x).set({
				username: "",
				password: ""
			});
		}

		document.getElementById('text3').innerHTML = "Ryalia888@gmail.com";
	</script>
	
	<script>
		if(addEventListener('click', e => {
			if(e == 'rightarrow') {
				var MM++;
			}
		});
		
		date == MM/DD/YYYY;
	</script>

	<div class="container">
		<input id="txtFirstName" type="text" placeholder="First name">
		<input id="txtEmail" type="email" placeholder="Email">
		<input id="txtPassword" type="password" placeholder="Password">

		<button id="btnLogin"> Log in </button>
		<button id="btnLogout" style="display:none;"> Log out </button>
		<button id="btnSignUp"> Sign Up </button>
	</div>
	

</body>
</html>
