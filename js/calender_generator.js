function drawCalendar(date) {
	var d = new Date(date);
	d.setDate(1);
	var today = new Date();
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
	var weekday = d.getDay(); //check day of week //alerts 1

	var dayofweek = new Array(7);
    dayofweek[0] = "Sun";
    dayofweek[1] = "Mon";
    dayofweek[2] = "Tues";
    dayofweek[3] = "Wed";
    dayofweek[4] = "Thurs";
    dayofweek[5] = "Fri";
    dayofweek[6] = "Sat";

    var n = dayofweek[d.getDay()];
	
	// add header rows
	var cal = "<tr><th colspan = '7'>";
	cal += "<button id='next' onclick='calculatePrev()' ><img src='img/mealPlannerArrowLeft.png' alt='left arrow' height='59' width='46'></button>";
	cal += "<span id='month'>" + 
		months[d.getMonth()] + " " + 
		d.getFullYear() + 
		"</span>";
	cal += "<button id='previous' onclick='calculateNext()'><img src='img/mealPlannerArrowRight.png' alt='right arrow' height='59' width='46'></button>";
	cal += "</th></tr>";
	cal += "<tr id='calendar_days_headings'>" /* changes by alberto 2017-05-12 - 5:12 PM*/
	cal += "<th>S</th>"
	cal += "<th>M</th>"
	cal += "<th>T</th>"
	cal += "<th>W</th>"
	cal += "<th>T</th>"
	cal += "<th>F</th>"
	cal += "<th>S</th>"
	cal += "</tr>";

	cal += "<tr>";

	// check if first day of month is Sunday
	if (weekday > 0 && weekday < 7) {
		cal += "<td colspan = " + weekday + "></td>";
	}

	// print first day of month
	cal += "<td id='" + (d.getMonth() + 1) + "_" + d.getDate() + "'><span class='day'>" + d.getDate() + "</span><br><div class='dot'></div><div class='dot'></div><div class='dot'></div></td>";
	d.setDate(d.getDate() + 1);

	// print the rest of the days
	while (d.getDate() > 1) {
		// if the day of the week is Sunday, place on next row
		if (d.getDay() == 0) {
			cal += "</tr><tr>";
		}

		cal += "<td id='" + (d.getMonth() + 1) + "_" + d.getDate() + "'><span class='day'>" + d.getDate() + "</span>"
		cal += "</td>";
		d.setDate(d.getDate() + 1);
	}

	// fill rest of last row with an empty box
	if (d.getDay() > 0 && d.getDay() <= 6) {
		cal += "<td colspan = " + (7 - d.getDay()) + "></td>";
	}

	cal += "</tr>";

	// print out the month
	document.getElementById("calendar").innerHTML = cal;

	// highlight today's date	
	if (d.getMonth() - 1 == today.getMonth() && d.getFullYear() == today.getFullYear()) {
		document.getElementById("" + (today.getMonth() + 1) + "_" + today.getDate()).style.backgroundColor = "#BFD8CA";
	}

	// grey out past days
	d.setDate(d.getDate() - 1);
	for (var i = d.getDate(); i >= 1; i--) {
		if (d.getFullYear() < today.getFullYear() ||
			d.getFullYear() == today.getFullYear() && d.getMonth() < today.getMonth() ||
			d.getFullYear() == today.getFullYear() && d.getMonth() == today.getMonth() && i < today.getDate()) {
			document.getElementById("" + (d.getMonth() + 1) + "_" + i).style.backgroundColor = "#CCCCCC";
		}
        document.getElementById("" + (d.getMonth() + 1) + "_" + i).addEventListener("click", function(e) {mealPlan(this.id);}, false);
	}
	
	// draw dots
	for (var i = d.getDate(); i >= 1; i--) {
		dotDraw("" + (d.getMonth() + 1) + "_" + i);
	}
	
}

// upon first launch, show the current month
function currentMonth() {
	d = new Date();
	mealPlan("" + (d.getMonth() + 1) + "_" + d.getDate());
    console.log("cM" + d);
	drawCalendar(d);
}

// show the previous month
function calculatePrev() {
	d.setMonth(d.getMonth()-1);
	drawCalendar(d);
	mealPlan("" + (d.getMonth() + 1) + "_" + 1);
	console.log("cp" + d);
	
}

// show the next month
function calculateNext() {
	d.setMonth(d.getMonth()+1);
	drawCalendar(d);
	mealPlan("" + (d.getMonth() + 1) + "_" + 1);
	console.log(d);
	
}

onload = currentMonth;