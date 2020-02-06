let mainEl = document.getElementById("currentDay");

let choiceEl = document.getElementsByClassName("buttons");

let plannerNum = 0;

var eventEl = JSON.parse(localStorage.getItem("data"));

mainEl.append(planner);

choiceEl.append(planner[plannerNum].button);

plannerNUm++;

$(`#answerChoice`).on('click', function (event) {
  event.preventDefault();
  $('#main').hide();
  $('#answerChoice').hide();

  weekDay();
  console.log(setTime());

});

function weekDay() {
  $(`#quest`).text(planner[plannerNum].week);
  $(`#buttons`).empty();
  for (let i = 0; i < planner[plannerNum].week.length; i++) {
    $('#buttons').append(`<button class= "choose" data-choice= "${planner[plannerNum].week[i]}"
data-type='${planner[plannerNum].week}'> ${planner[plannerNum].week[i]} </button>`)


  };
}

$('#buttons').on('click', '.choose', function (event) {
  event.preventDefault();
  var userChoice = $(this).attr('data-choice');

  alert(userChoice);
  console.log(userChoice);

  if (plannerNum < planner.length - 1) {
    plannerNum++;
    disQuestion();
  }
  else {

    result();
  }

})

function result() {
  console.log(wrongAnswer);
  console.log(rightAnswer);
  $(`#buttons`).empty();
  
}

$(`.select`).click(function () {

  let event = $(`#buttons`).val();

  const scorer = {
    event,
    day,
    month,
  }

  localStorage.setItem(`data`, JSON.stringify(scorer));

});

$(`.highScore`).text(`High-Score: ${initialsEl.initials} ${initialsEl.right} correct, and ${initialsEl.wrong} inncorrect with ${initialsEl.timeLeft} seconds left.`);

console.log(initialsEl.initials)
