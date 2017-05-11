// Helper Function
function $(id) {
	var element = document.getElementById(id);
	
	if ( element == null ) 
		alert('Programmer error: ' + id + 'does not exist.');
	return element;
	
}

// Applied position
function testPositionValid(id) {
	return ($(id).selectedIndex != 0);
}

function warnPositionInvalid(id) {
	if ( !testPositionValid(id) )
		document.getElementById('errorPosition').innerHTML = "You must select a position.";
	else document.getElementById('errorPosition').innerHTML = "";
}

// Passed COMP 1536
function testPassValid(id) {
	return ($(id).checked != 1);
}

function warnPassInvalid(id) {
	if ( !testPassValid(id) )
		alert( "You will not be considered if you have not passed this course." );
}

// Start Date
function testDateValid(monthId, dayId, yearId) {	
	return (($(monthId).value < 1 || $(monthId).value > 12 
		|| $(dayId).value < 1 || $(dayId).value > 31 
		|| $(yearId).value < 2013 || $(yearId).value > 2999) 
		
		&& ($(monthId).value.length > 0 
		&& $(dayId).value.length > 0 
		&& $(yearId).value.length > 0))

}

function warnDateInvalid(monthId, dayId, yearId) {
	if ( testDateValid(monthId, dayId, yearId) )
		document.getElementById('errorDate').innerHTML = "You must enter a valid month (1-12), day (1-31) and year (2013-2999) inclusive.";
	else document.getElementById('errorDate').innerHTML = "";
}

// Resume
function testResumeValid(id) {
	var str = $(id).value;
	
	return ( str.length > 0 
		&& str.substring(str.length - 3) == "doc" 
		|| str.substring(str.length - 3) == "pdf"
		|| str.substring(str.length - 4) == "docx" );
}

function warnResumeInvalid(id) {
	if ( !testResumeValid(id) )
		alert ("You must upload a file with the .doc, .pdf or .docx extension.");
}

// Name
function testNameValid(firstNameId, lastNameId) {
	var strFirst = $(firstNameId).value.length;
	var strLast = $(lastNameId).value.length;
	
	return (strFirst > 1 && strLast > 1);
}

function warnNameInvalid(firstNameId, lastNameId) {
	if ( !testNameValid(firstNameId, lastNameId) )
		document.getElementById('errorName').innerHTML = " You must enter a first and last name.";
	else document.getElementById('errorName').innerHTML = "";
}

// Email
function testEmailValid(id) {
	var str = $(id).value;
	
	return (str.length > 1 
		&& str.substring(str.length - 4) == ".com"
		|| str.substring(str.length - 3) == ".ca"
		|| str.substring(str.length - 4) == ".org")
}

function warnEmailInvalid(id) {
	if ( !testEmailValid(id) )
		document.getElementById('errorEmail').innerHTML = "You must enter an email with the .com, .ca or .org extension.";
	else document.getElementById('errorEmail').innerHTML = "";
}

// Phone
function testPhoneValid(areaCode, threeDigit, fourDigit) {
	return (($(areaCode).value < 100 || $(areaCode).value > 999 
		|| $(threeDigit).value < 100 || $(threeDigit).value > 999 
		|| $(fourDigit).value < 1000 || $(fourDigit).value > 9999) 
		
		&& ($(areaCode).value.length > 0 
		&& $(threeDigit).value.length > 0 
		&& $(fourDigit).value.length > 0))
}

function warnPhoneInvalid(areaCode, threeDigit, fourDigit) {
	if ( testPhoneValid(areaCode, threeDigit, fourDigit) )
		document.getElementById('errorPhone').innerHTML = "You must use the fixed 3-3-4 scheme of a phone number.";
	else document.getElementById('errorPhone').innerHTML = "";
}