<?php

	//Sets variables = Grabs variables using POST by 'name', lowercase-s them for comparison
	
	$ufName = strtolower($_POST['txtFirstName']);
	$ulName = strtolower($_POST['txtLastName']);
	$uEmail = strtolower($_POST['txtEmail']);
	
	//Sets variable = opens file in readable mode
	$users = fopen('users.txt', 'r');
	
	//Sets disallows access to page on default
	$tUser = false;
	
	//While not end of file,
	while(!feof($users)) {
		
		//Grab a line
		$line = fgets($users);
		
		//Grab a word (from line (which is a string) which is naturally 
		//	delimited by spaces in users.txt)
		$token = strtolower(strtok($line, " "));
		
		//Checks if user's first name input == grabbed word.
		if($ufName == $token) {
			
			//If so, grab another word delimited by space
			$token = strtolower(strtok(" "));
			
			//Checks if user's last name input == grabbed word.
			if($ulName == $token) {
			
				//If so, grab the E-mail, cut off the end with rtrim (this fn removes right-side whitespace)
				$token = strtolower(strtok(" "));
				$token = rtrim($token);
				
				//Final check. If all ifs are passed, then allow user to pass (by changing website.html)
				if($uEmail == $token) {
					
					$tUser = true;
					
				}
				
			}
	
		}
		
	}

	//Closes file
	fclose($users);

	//Page changer depending on $tUser, defaulted to false which is the error page.
	if($tUser) {
		$fgotopage = "welcome.html";
	}
	else {
		$fgotopage = "errorlogin.html";		
	}
	
	//<script> underneath sends user to = specified page
?>

<script>
	window.location = "<?=$fgotopage?>";
</script>
