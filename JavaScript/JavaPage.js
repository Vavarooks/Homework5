let mainEl = document.getElementById("currentDay");

let choiceEl = document.getElementsByClassName("buttons");

let plannerNum = 0;

var eventEl = JSON.parse(localStorage.getItem("data"));

mainEl.append(planner);

choiceEl.append(planner[plannerNum].button);

// Work on CSS & Java
// Make it look like image
// figure out how to get data to local storage
// firgure out how to recive that data and put it to the div it was taken from


