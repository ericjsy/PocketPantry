var today = new Date();
var mm = today.getMonth()+1; //January is 0!
var dayofweek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var adjustDayBy = 0;
var show_selected_day =
    dayofweek[today.getDay() + adjustDayBy ]+ ", " 
    + months[today.getMonth() + adjustDayBy] + " " 
    + today.getDate();


var para = document.createElement("th");
var node = document.createTextNode(show_selected_day);
para.appendChild(node);

var element = document.getElementById("header_selected_date");
element.appendChild(para);
