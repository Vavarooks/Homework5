let mainEl = document.getElementById("main");

let buttons = document.getElementById("buttons");

let day = 0

day++;

$(`#buttons`).on('click', function (event) {
    event.preventDefault();
    weekDay();
  
  });

  function weekDay() {
    $(`#main`).text(planner[day]);
    $(`#buttons`).empty();
    for (let i = 0; i < planner[day].week.length; i++) {
      $('#buttons').append(`<button class= "choose" data-choice= "${planner[day].week[i]}"
  data-type='${planner[day].week[i]}'> ${planner[day].week[i]} </button>`);
    };


  };

  $(`#buttons`).on('click', function (event) {
    event.preventDefault();
    month();
  
  });

  function month() {
    $(`#main`).text(planner[day]);
    $(`#buttons`).empty();
    for (let i = 0; i < planner[day].month.length; i++) {
      $('#buttons').append(`<button class= "choose" data-choice= "${planner[day].month[i]}"
  data-type='${planner[day].month[i]}'> ${planner[day].month[i]} </button>`);
    };


  };

 
