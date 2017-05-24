startDate = {'date': ""};
endDate = {'date': ""};

selector = "";

function decider(click) {
	console.log("Start of decider()");
	removeColorDate();
	document.getElementById(click).classList.add("date_range_color");
	console.log("click: " + click);
	decided = false;
	console.log("startDate: " + startDate.date);
	console.log("endDate: " + endDate.date);
	while(!decided) {
		if (!isStartEmpty() && !isEndEmpty()) {
			if((selector == "to") && (greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(endDate, click);
				console.log("A");
				updateS();
				updateE();
				break
			} else if ((selector == "to") && !(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				startDate.date = "";
				console.log("B");
				updateS();
				updateE();
				break
			}
			if ((selector == "from") && !(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				console.log("C");
				updateS();
				updateE();
				break
			} else if ((selector == "from") && (greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				endDate.date = "";
				console.log("D");
				updateS();
				updateE();
				break
			}
			
		}
		
		if (isStartEmpty() && !isEndEmpty() && !(selector == "to")) {
			
			if (!(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				console.log("E");
				updateS();
				updateE();
				break
			} else if (greater(click, endDate.date)) {
				storeClick(startDate, click);
				endDate.date = "";
				console.log("F");
				updateS();
				updateE();
				break
			}
			
		}
		
		if(selector == "from") {
			storeClick(startDate, click);
			console.log("G");
			updateS();
			updateE();
			break
		}
		
		if (isStartEmpty() && isEndEmpty()) {
			storeClick(startDate, click);
			console.log("I");
			updateS();
			updateE();
			break
		}
		if (!isStartEmpty() && isEndEmpty()) {
			removeColorDate();
			document.getElementById(click).classList.add("date_range_color");
			if(greater(click, startDate.date) || equal(click, startDate.date)) {
				storeClick(endDate, click);
				colorDateRange(startDate.date, endDate.date);
				console.log("J");
				updateS();
				updateE();
				break
			} else {
				storeClick(startDate, click);
				console.log("K");
				endDate.date = "";
				updateS();
				updateE();
				break
			}
			
		}
		if (!isStartEmpty() && !isEndEmpty()) {
			storeClick(startDate, click);
			console.log("L");
            removeColorDate();
			
            // colorDateRange(startDate.date, endDate.date);
			
            document.getElementById(click).classList.add("date_range_color");
			endDate.date = "";
			updateS();
			updateE();
			break
		}
		
		console.log("ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR");
	}
		
	
	// swap();
	// storeClick(startDate, click);
	// storeClick(endDate, click);
	
	selector = "";
	swap();
	output();
}

function removeColorDate(){
	console.log("Start of removeColorDate");
    var elements = document.getElementById("calendar").getElementsByClassName("date_range_color");  

    while (elements.length > 0) {
        elements[0].classList.remove("date_range_color");
    }
}

function colorDateRange(startDate, endDate){
	console.log("Start of colorDateRange");
	if(!isStartEmpty() && !isEndEmpty()) {
		var day_array = new Array();
		console.log("----------------------------------------------------------------------")
		console.log(startDate.date);
		console.log(endDate.date);
		console.log('The startDate.date is: ' + String(startDate.date));
		console.log('The endDate.date is: ' + String(endDate.date));
		var startDate_month = parseInt((String(startDate).split("_"))[0]);
		var startDate_day   = parseInt((String(startDate).split("_"))[1]);
		var endDate_month   = parseInt((String(endDate).split("_"))[0]);
		var endDate_day     = parseInt((String(endDate).split("_"))[1]);
		
		var first_month_days = new Date(2017, startDate_month, 0).getDate();
		
		var dateRange = new Array();
		var str = startDate + "_" + endDate;
		
		if(startDate_month < endDate_month){
		//start 
			for(i = startDate_day; i <= first_month_days; i++){
				day_array.push(startDate_month + "_" + i);
			}

			//end      
			for(i = 1; i <= endDate_day; i++){
				day_array.push(endDate_month + "_" + i);
			}
		} else {
			for(i = startDate_day; i <= endDate_day; i++){
				day_array.push(startDate_month + "_" + i);
			}
		}
		console.log("START OF FOR LOOP");
		console.log("day_array.length: " + day_array.length);
		for(i = 0; i < day_array.length; i++){
			console.log(day_array[i]);
			console.log(i);
			var a = document.getElementById(day_array[i]);
			if(a != null) {
				document.getElementById(day_array[i]).classList.add("date_range_color");
			}
		}
	}
}

function storeClick(startEnd, click) {
	
	startEnd.date = click;
}

function isStartEmpty() {
	if (startDate.date == "") {
		return true;
	}
}

function isEndEmpty() {
	if (endDate.date == "") {
		return true;
	}
}

function slcFrom() {
	startDate.date = "";
	selector = "from";
	updateS();
}

function slcTo() {
	endDate.date = "";
	selector = "to";
	updateE();
}

function greater(stra, strb) {
	
	var str1 = stra.split("_");
	var str2 = strb.split("_");
	
	if ((parseInt(str1[0]) > parseInt(str2[0])) || 
	((parseInt(str1[0]) == parseInt(str2[0])) && (parseInt(str1[1]) > parseInt(str2[1])))) {
		return true;
	} else {
		return false;
	}
}

function equal(stra, strb) {
	
	var str1 = stra.split("_");
	var str2 = strb.split("_");

	return ((parseInt(str1[0]) == parseInt(str2[0])) 
          && parseInt(str1[1]) == parseInt(str2[1]));
}

function updateS() {
	
	btn1 = document.getElementById('start_selector');
	if(startDate.date == "") {
		btn1.innerHTML = "From";
	} else {
		var str1 = startDate.date.split("_");
		btn1.innerHTML = str1[1];
	}
	
}

function updateE() {
	btn2 = document.getElementById('end_selector');
	if(endDate.date == "") {
		btn2.innerHTML = "To";
	} else {
		var str2 = endDate.date.split("_");
		btn2.innerHTML = str2[1];
	}
}

function swap() {
	
	if (!(isStartEmpty() || isEndEmpty())) {
		
		if (greater(startDate.date, endDate.date)) {

			var temp = endDate.date;
			endDate.date = startDate.date;
			startDate.date = temp;
			
		}
	}
	/*
	console.log('--Swapping--');
	console.log("startDate: " + startDate.date);
	console.log("endDate: " + endDate.date);
	console.log('--Swapped--');
	*/
}

function output() {
	console.log("Start of output()");
	
	console.log("startDate: " + startDate.date);
	console.log("endDate: " + endDate.date);
	console.log("-----------------------------------");
	
	if(!(startDate.date == "") && !(endDate.date == "")) {
		console.log("Call Grocery List");
		retrieve_grocerylist(startDate.date, endDate.date);
		loadTable();
	}
}