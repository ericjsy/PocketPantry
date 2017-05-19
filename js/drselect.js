var startDate = {'date': ""};
var endDate = {'date': ""};

var selector = "";

function decider(click) {
	
	
	
	
	
	
	
	// storeClick(startDate, click);
	// storeClick(endDate, click);
	
}

function storeClick(startEnd, click) {
	
	startEnd.date = click;
	
	swap();
	
	console.log("startDate: " + startDate.date);
	console.log("endDate: " + endDate.date);	
}

function swap() {
	
	var str1 = startDate.date.split("_");
	var str2 = endDate.date.split("_");
	
	if(!((startDate.date == "") || (endDate.date == ""))) {
		
		if((str1[0] > str2[0]) ||
			((str1[0] == str2[0]) && (str1[1] > str2[1]))) {

			var temp = endDate.date;
			endDate.date = startDate.date;
			startDate.date = temp;
			
		}
	}
	// console.log("startDate: " + startDate.date);
	// console.log("endDate: " + endDate.date);
}