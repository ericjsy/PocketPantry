			function drawCalendar(date) {
			    var d = new Date(date);
			    var today = new Date();
			    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
			    var weekday = d.getDay(); //check day of week

			    // add header rows
			    var cal = "<tr><th colspan = '7'><span id='month'>" + months[d.getMonth()] + " " + d.getFullYear() + "</span></th></tr>";
			    cal += "<tr><th>Sun</th>"
			    cal += "<th>Mon</th>"
			    cal += "<th>Tues</th>"
			    cal += "<th>Wed</th>"
			    cal += "<th>Thurs</th>"
			    cal += "<th>Fri</th>"
			    cal += "<th>Sat</th></tr>";

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
			        cal += "<div class='dot_container'><div class='dot'>&#9679;</div><div class='dot'>&#9679;</div><div class='dot'>&#9679;</div></div></td>";
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
			    //			    if (d.getMonth() - 1 == today.getMonth() && d.getFullYear() == today.getFullYear()) {
			    //			        document.getElementById("" + today.getMonth + today.getDate()).style.backgroundColor = "#006600";
			    //			    }

			    document.getElementById("" + (today.getMonth() + 1) + "_" + today.getDate()).style.backgroundColor = "#006600";
			    //                console.log("" + (today.getMonth()+1) + "_" + today.getDate());

			    // grey out past days
			    d.setDate(d.getDate() - 1);
			    for (var i = d.getDate(); i >= 1; i--) {
			        if (d.getFullYear() < today.getFullYear() ||
			            d.getFullYear() == today.getFullYear() && d.getMonth() < today.getMonth() ||
			            d.getFullYear() == today.getFullYear() && d.getMonth() == today.getMonth() && i < today.getDate()) {
			            document.getElementById("" + (d.getMonth() + 1) + "_" + i).style.backgroundColor = "#CCCCCC";
			        } else {
                        document.getElementById("" + (d.getMonth() + 1) + "_" + i).addEventListener("click", function(e) {mealPlan(this.id);}, false);
                    }
			    }
			}

			// upon first launch, show the current month
			function currentMonth() {
			    var d = new Date();
                mealPlan("" + (d.getMonth() + 1) + "_" + d.getDate());
			    d.setDate(1);
			    drawCalendar(d);
			}

			// show the previous month
			function calculatePrev() {
			    var current = document.getElementById("month").innerHTML;
			    var e = new Date(current);

			    e.setMonth(e.getMonth() - 1);

			    drawCalendar(e);
			}

			// show the next month
			function calculateNext() {
			    var current = document.getElementById("month").innerHTML;
			    var e = new Date(current);

			    e.setMonth(e.getMonth() + 1);

			    drawCalendar(e);
			}

		onload = currentMonth;