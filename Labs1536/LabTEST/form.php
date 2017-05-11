<?php

	echo $_POST('users');
	echo '<br>';
	$myfile = fopen('users.txt', 'r');
	$line1 = fgets($myfile);
	echo $line1;
	fclose($myfile);
	
	fgotopage = "thankyou.html";
	
?>