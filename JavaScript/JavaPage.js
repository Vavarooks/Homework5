let mainEl = document.getElementById("main");

let buttons = document.getElementById("buttons");

let day = 0

day++;

$(`#buttons`).on('click', function (event) {
    event.preventDefault();
    weekDay();
  
  });

  function weekDay() {
    for (let i = 0; i < planner.week.length; i++) {
      $('#buttons').append(`<button class= "choose" data-choice= "${planner.week[i]}"
  data-type='${planner.week[i]}'> ${planner.week[i]} </button>`);
    };


  };

  $(`#buttons`).on('click', function (event) {
    event.preventDefault();
    month();
  
  });

  function month() {
    for (let i = 0; i < planner.month.length; i++) {
      $('#buttons').append(`<button class= "choose" data-choice= "${planner.month[i]}"
  data-type='${planner.month[i]}'> ${planner.month[i]} </button>`);
    };


  };

  mainEl.append(`Day of the Week: ${planner.week[i]}`);

  mainEl.append(`Month: ${planner.month[i]}`);

 
