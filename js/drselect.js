startDate = {'date': ""};
endDate = {'date': ""};

selector = "";

function decider(click) {
	
	console.log("click: " + click);
	decided = false;
	while(!decided) {
		if (!isStartEmpty() && !isEndEmpty()) {
			if((selector == "to") && (greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(endDate, click);
				console.log("A");
				updateE();
				break
			} else if ((selector == "to") && !(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				console.log("B");
				updateS();
				startDate.date = ""; // LOOK AT ME
				break
			}
			if ((selector == "from") && !(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				console.log("C");
				updates();
				break
			} else if ((selector == "from") && (greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				console.log("D");
				updateS();
				updateE();
				endDate.date = ""; //LOOK AT ME?
				break
			}
			
		}
		
		if (isStartEmpty() && !isEndEmpty() && !(selector == "to")) {
			
			if (!(greater(click, endDate.date) || equal(click, endDate.date))) {
				storeClick(startDate, click);
				console.log("E");
				updateS();
				break
			} else if (greater(click, endDate.date)) {
				storeClick(endDate, click);
				console.log("F");
				updateE();
				endDate.date = ""; // LOOK AT ME
				break
			}
			
		}
		
		if(selector == "from") {
			storeClick(startDate, click);
			console.log("G");
			updateS();
			break
		}
		if(selector == "to") {
			storeClick(endDate, click);
			console.log("H");
			updateE();
			break
		}
		
		if (isStartEmpty() && isEndEmpty()) {
			storeClick(startDate, click);
			console.log("I");
			updateS();
			break
		}
		if (!isStartEmpty() && isEndEmpty()) {
			
			if(greater(click, startDate.date) || equal(click, startDate.date)) {
				storeClick(endDate, click);
				console.log("J");
				updateE();
				break
			} else {
				storeClick(startDate, click);
				console.log("K");
				updateS();
				updateE();
				endDate.date = ""; // LOOK AT ME?
				break
			}
			
		}
		if (!isStartEmpty() && !isEndEmpty()) {
			storeClick(startDate, click);
			console.log("L");
			updateS();
			updateE();
			endDate.date = "";
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
	selector = "from";
}

function slcTo() {
	selector = "to";
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
	
	if ((parseInt(str1[0]) == parseInt(str2[0])) && parseInt((str1[1]) == parseInt(str2[1]))) {
		return true;
	} else {
		return false;
	}
}

function updateS() {
	btn1 = document.getElementById('start_selector');
	var str1 = startDate.date.split("_");
	btn1.innerHTML = str1[1];
}

function updateE() {
	btn2 = document.getElementById('end_selector');
	var str2 = endDate.date.split("_");
	btn2.innerHTML = str2[1];
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
	
	console.log("startDate: " + startDate.date);
	console.log("endDate: " + endDate.date);
	console.log("-----------------------------------");
}