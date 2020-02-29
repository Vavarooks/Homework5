var currentTime = moment().hours();

$("#currentDay").text(moment().format("MMM Do YYYY"))

$(".saveBtn").on("click", function(event){
event.preventDefault();

var dataInt =  $(this).siblings(".input").val();
var timeInt = $(this).siblings(".time-block").text();
console.log(dataInt);
console.log(timeInt)

localStorage.setItem(timeInt,dataInt);

});

$(".row").each(function(){

var time = $(this).children(".time-block").text();

 var data = localStorage.getItem(time)

$(this).children(".input").val(data);

if (parseInt(time)>= 1 && parseInt(time)<= 10 && time.substr(-2)=="pm"){
  time=parseInt(time) + 12;
};

if (currentTime >  parseInt(time) ){
  $(this).children(".input").addClass("past");
}
else if (currentTime < parseInt(time)){
  $(this).children(".input").addClass("future");
}
else {
  $(this).children(".input").addClass("present");
}

console.log(time, data);

});



console.log(currentTime)

// Work on CSS & Java
// Make it look like image
// figure out how to get data to local storage
// firgure out how to recive that data and put it to the div it was taken from


