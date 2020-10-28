let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
function minus_one_year() {
showCalendar(currentMonth, currentYear -= 1);
}
function plus_one_year() {
showCalendar(currentMonth, currentYear += 1);
}
function next_month() {
currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
currentMonth = (currentMonth + 1) % 12;
showCalendar(currentMonth, currentYear);
}
function previous_month() {
currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
showCalendar(currentMonth, currentYear);
}
function showCalendar(month, year) {
let firstDay = (new Date(year, month)).getDay();
let daysInMonth = 32 - new Date(year, month, 32).getDate();
let tbl = document.getElementById("calendar-body");
//Now clearing all previous cells dates
tbl.innerHTML = "";
// DOM Manipulation
monthAndYear.innerHTML = months[month] + " " + year;
selectYear.value = year;
selectMonth.value = month;
let date = 1;
for (let i = 0; i < 6; i++) {
let row = document.createElement("tr");
//creating individual cells
for (let j = 0; j < 7; j++) {
if (i === 0 && j < firstDay) {
let cell = document.createElement("td");
let cellText = document.createTextNode("");
cell.appendChild(cellText);
row.appendChild(cell);
}
else if (date > daysInMonth) {
break;
}
else {
let cell = document.createElement("td");
let cellText = document.createTextNode(date);
cell.appendChild(cellText);
row.appendChild(cell);
date++;
}
}
tbl.appendChild(row); // appending each row into calendar body.
}
}