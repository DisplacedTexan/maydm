var possibleNumbers = [1, 2, 3, 4, 5, 6];
var answer;
var guessCount = 0;
var winner = false;

var guess0;
var guess1;
var guess2;
var guess3;

var inputs = document.getElementById("guessInputs");
var submit = document.getElementById("submitButton");
var reset = document.getElementById("resetButton");
var guessesElement = document.getElementById("guesses");
var gameResultElement = document.getElementById("gameResult");

function getRandomInt(numberOfElements) {
  // this picks a random number from the numbers left
  // min is 0 and max is the number of elements + 1
  // The maximum is exclusive and the minimum is inclusive
  var min = Math.ceil(0);
  var max = Math.floor(numberOfElements);

  return Math.floor(Math.random() * (max - min)) + min;
}

function createCode() {
  answer = [];
  for (var i = 0; i < 4; i++) {
    let random = getRandomInt(possibleNumbers.length);
    answer.push(possibleNumbers[random]);
    possibleNumbers.splice([random], 1);
  }
}

function checkGuess() {
  guess0 = parseInt(document.getElementById("guess0").value);
  guess1 = parseInt(document.getElementById("guess1").value);
  guess2 = parseInt(document.getElementById("guess2").value);
  guess3 = parseInt(document.getElementById("guess3").value);

  let correctNumber = 0;
  let presentNumber = 0;
  let wrongNumber = 0;

  if (guess0 == answer[0]) {
    // if the 1st number in the guess matches the 1st number in the answer,
    // add 1 to correctNumber
    correctNumber++;
  } else if (answer.indexOf(guess0) > 0) {
    // if the 1st number is in the answer, add 1 to presentNumber
    presentNumber++;
  } else {
    // if number isn't in the answer at all, add 1 to wrongNumber
    wrongNumber++;
  }

  if (guess1 == answer[1]) {
    // if the 2nd number in the guess matches the 2nd number in the answer,
    // add 1 to correctNumber
    correctNumber++;
  } else if (answer.indexOf(guess1) > 0) {
    // if the 2nd number is in the answer, add 1 to presentNumber
    presentNumber++;
  } else {
    // if number isn't in the answer at all, add 1 to wrongNumber
    wrongNumber++;
  }

  if (guess2 == answer[2]) {
    // if the 3rd number in the guess matches the 3rd number in the answer,
    // add 1 to correctNumber
    correctNumber++;
  } else if (answer.indexOf(guess2) > 0) {
    // if the 3rd number is in the answer, add 1 to presentNumber
    presentNumber++;
  } else {
    // if number isn't in the answer at all, add 1 to wrongNumber
    wrongNumber++;
  }

  if (guess3 == answer[3]) {
    // if the 4th number in the guess matches the 4th number in the answer,
    // add 1 to correctNumber
    correctNumber++;
  } else if (answer.indexOf(guess3) > 0) {
    // if the 4th number is in the answer, add 1 to presentNumber
    presentNumber++;
  } else {
    // if number isn't in the answer at all, add 1 to wrongNumber
    wrongNumber++;
  }
  inputs.reset();

  let resultsHTML = checkResults(correctNumber, presentNumber, wrongNumber);
  addGuessToPage(resultsHTML);
}

function checkResults(correct, present, wrong) {
  let correctHTML = `<div class="result correct"></div>`;
  let presentHTML = `<div class="result present"></div>`;
  let wrongHTML = `<div class="result wrong"></div>`;

  let results = ``;

  if (correct === 4) {
    // we have a winner!
    winner = true;
    showGameResults(winner);
  }

  if (correct > 0) {
    // add the number of correct guesses to result
    results += correctHTML.repeat(correct);
  }

  if (present > 0) {
    // add the number of present guesses to result
    results += presentHTML.repeat(present);
  }

  if (wrong > 0) {
    // add the number of wrong guesses to result
    results += wrongHTML.repeat(wrong);
  }

  return results;
}

function addGuessToPage(results) {
  guessCount++;

  guessesElement.insertAdjacentHTML(
    "beforeend",
    `<div class="guessWrapper d-flex">
      <div class="guessedCode d-flex">
        <div class="d-flex guess">${guess0}</div>
        <div class="d-flex guess">${guess1}</div>
        <div class="d-flex guess">${guess2}</div>
        <div class="d-flex guess">${guess3}</div>
      </div>
      <div class="results d-flex">${results}</div>
    </div>`
  );
  // if there's been 10 guesses, show the results
  if (guessCount === 10) {
    showGameResults(winner);
  }
}

function showGameResults(result) {
  // hide the submit button & show reset
  reset.classList.remove("hidden");
  submit.classList.add("hidden");

  // show the numbers in their order
  document.getElementById("guess0").value = answer[0];
  document.getElementById("guess1").value = answer[1];
  document.getElementById("guess2").value = answer[2];
  document.getElementById("guess3").value = answer[3];

  // show the result of the game
  if (result) {
    gameResultElement.insertAdjacentHTML("beforeend", "<h2>You won!</h2>");
  } else {
    gameResultElement.insertAdjacentHTML(
      "beforeend",
      "<h2>Better luck next time!</h2>"
    );
  }
}

function resetGame() {
  inputs.reset();
  // hide the reset button & show submit
  reset.classList.add("hidden");
  submit.classList.remove("hidden");

  // remove last game's guesses
  guessesElement.innerHTML = "";
  // remove last game's result
  gameResultElement.innerHTML = "";

  // reset winner to false
  winner = false;
  // reset possible numbers to all
  possibleNumbers = [1, 2, 3, 4, 5, 6];
  // create a new code
  createCode();
}
