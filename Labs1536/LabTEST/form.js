// Helper Function
function $(id) {
	var element = document.getElementById(id);
	
	if ( element == null ) 
		alert('Programmer error: ' + id + 'does not exist.');
	return element;
	
}

// Email
function testEmailValid() {
	var email = $('txtEmail').value;
	
	return (/^\w+@\w+\.(com|ca|org)$/.test(email));
}

// Phone
function testPhoneValid_2() {
	var areaCode = $('txtPhone_0').value;
	var prefix = $('txtPhone_1').value;
	var suffix = $('txtPhone_2').value;
	
	return (/[(0-9)]{3}/.test(areaCode)) && (/[(0-9)]{3}/.test(prefix)) && (/[(0-9)]{4}/.test(suffix));
	
}

// Validates position
function testPositionValid() {
	return ($('selPosition').selectedIndex != 0);
}

function changeError() {
	
	var itemPassed = $('itmPassed');
	var radios = itemPassed.getElementsByTagName('input');
	
	for(var i = 0; i < radios.length; i++) {
	
		if(radios[i].checked == true) {
	
			erm = "You will not be considered if you have not passed this course.";
			
		}
		
	}
	
}

// Validates passed COMP 1536 ***** needs warning for leaving empty *****
function testPassValid() {
	
	changeError();
	
	var itemPassed = $('itmPassed');
	var radios = itemPassed.getElementsByTagName('input');
	
	return radios[0].checked;
	
}

// Validates start date
function testDateValid() {
	var mm = $('txtStartDate_0').value;
	var dd = $('txtStartDate_1').value;
	var yy = $('txtStartDate_2').value;
	
	return (mm >= 1 && mm <= 12) && (dd >= 1 && dd <= 31) && (yy >= 2013 && yy <= 2999);
	
}

// Validates resume ******** TEST THIS REGEX: ********
function testResumeValid_2() {
	var str = $('filResume').value;
	
	return /[\w\s-]+\.(docx|doc|pdf)$/.test(str);
}

// Validates name ***** needs validation ******
function testNameValid_2() {
	
	var strFirst = $('txtFirstName').value;
	var strLast = $('txtLastName').value;
	
	return ((/^[a-z]+$/i.test(strFirst)) && (/^[a-z]+$/i.test(strLast)));
}

//Error message
var erm = "Please select one of the above.";

// Valdiates submission

// It is necessary to clear the highlighting and display of the error message in the else part of the statement
// as it will always stay highlighted if the user fixes an input field since the class is not removed.
function formValidate() {
	
	var validation = [ 
		{ tests: testPositionValid(), errors: 'errorPosition', flags: 'itmPosition', messages: "You must select a position." },
		{ tests: testPassValid(), errors: 'errorPassedWeb', flags: 'itmPassed', messages: erm },
		{ tests: testDateValid(), errors: 'errorDate', flags: 'itmDate', messages: "You must enter a valid month (1-12), day (1-31) and year (2013-2999) inclusive." },
		{ tests: testResumeValid_2(), errors: 'errorResume', flags: 'itmResume', messages: "You must upload a file with the .doc, .pdf or .docx extension." },
		{ tests: testNameValid_2(), errors: 'errorName', flags: 'itmName', messages: " You must enter a first and last name using only alpha characters." },
		{ tests: testEmailValid(), errors: 'errorEmail', flags: 'itmEmail', messages: "Your Email must have a string (either letters, numbers or underscores), @, another string (either letters or numbers) and end in .com, .ca or .org. in this order." },
		{ tests: testPhoneValid_2(), errors: 'errorPhone', flags: 'itmPhone', messages: "You must use the fixed 3-3-4 number scheme of a phone number." }
	];
	
	for (i = 0; i < validation.length; i++) {
		
		if ( !validation[i].tests ) {
			$(validation[i].errors).innerHTML = validation[i].messages;
			$(validation[i].flags).className = "error";	
		}
		else {
			$(validation[i].errors).innerHTML = "";
			$(validation[i].flags).className = "";	
		}
	}
	
	for (j = 0; j < validation.length; j++) {
		if ( !validation[j].tests ) {
			return false;
		}
	}
	
}