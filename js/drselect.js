startDate = {'date': ""};
endDate = {'date': ""};

selector = "";

function decider(click) {
	
//	console.log("click: " + click);
	decided = false;
	while(!decided) {
		if (!isStartEmpty() && !isEndEmpty()) {
			if((selector == "to") && (greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(endDate, click);
//				console.log("A");
				updateS();
				updateE();
				break
			} else if ((selector == "to") && !(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				startDate.date = "";
//				console.log("B");
				updateS();
				updateE();
				break
			}
			if ((selector == "from") && !(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
//				console.log("C");
				updateS();
				updateE();
				break
			} else if ((selector == "from") && (greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				endDate.date = "";
//				console.log("D");
				updateS();
				updateE();
				break
			}
			
		}
		
		if (isStartEmpty() && !isEndEmpty() && !(selector == "to")) {
			
			if (!(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
//				console.log("E");
				updateS();
				updateE();
				break
			} else if (greater(click, endDate.date)) {
				storeClick(startDate, click);
				endDate.date = "";
//				console.log("F");
				updateS();
				updateE();
				break
			}
			
		}
		
		if(selector == "from") {
			storeClick(startDate, click);
//			console.log("G");
			updateS();
			updateE();
			break
		}
		/*
		if(selector == "to")
			storeClick(endDate, click);
			console.log("H");
			updateS();
			updateE();
			break
		}
		*/
		
		if (isStartEmpty() && isEndEmpty()) {
			storeClick(startDate, click);
//			console.log("I");
			updateS();
			updateE();
			break
		}
		if (!isStartEmpty() && isEndEmpty()) {
			
			if(greater(click, startDate.date) || equal(click, startDate.date)) {
				storeClick(endDate, click);
//				console.log("J");
				updateS();
				updateE();
				break
			} else {
				storeClick(startDate, click);
//				console.log("K");
				endDate.date = "";
				updateS();
				updateE();
				break
			}
			
		}
		if (!isStartEmpty() && !isEndEmpty()) {
			storeClick(startDate, click);
//			console.log("L");
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
	
//	console.log("startDate: " + startDate.date);
//	console.log("endDate: " + endDate.date);
//	console.log("-----------------------------------");
	
	if(!(startDate.date == "") && !(endDate.date == "")) {
//		console.log("Call Grocery List");
		retrieve_grocerylist(startDate.date, endDate.date);
		loadTable();
	}
}