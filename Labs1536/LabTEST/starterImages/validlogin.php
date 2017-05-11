<?php

	$first = trim(strtolower($_POST['fname']));
	$last = trim(strtolower($_POST['lname']));
	$email = trim(strtolower($_POST['txtEmail']));
	
	$myfile = fopen('users.txt', 'r');
	
	$value = false;
	
	while(!feof($myfile)) {
		
		$string = strtolower(fgets($myfile));
		$token = strtok($string, " ");
		
		if ($token == $first) {
			echo "$token<br>";
			$token = strtok(" ");
		
			if ($token == $last) {
				echo "$token<br>";
				$token = strtok(" ");
		
				if (trim($token) == $email) {
					echo "$token<br>";
					$value = true;
				} else { 
					echo "Invalid Email.";
				}
			
			} else { 
				echo "Invalid last name.";
			}

		} else { 
			echo "Invalid first name.";
		}
			
	}
		
	
	fclose($myfile);

	if ($value) {
		echo "<strong><br>VALID!!!</strong>";
	} else {
		echo "<strong><br>INVALID!!!</strong>";
	}
	
	// $fgotopage = "thankyou.html";

?>