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