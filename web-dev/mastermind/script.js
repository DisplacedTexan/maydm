var possibleNumbers = [1, 2, 3, 4, 5, 6];

var answer = [];

var guessCount = 0;

function getRandomInt(numberOfElements) {
  var min = Math.ceil(0);
  var max = Math.floor(numberOfElements);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function createCode() {
  for (var i = 0; i < 4; i++) {
    let random = getRandomInt(possibleNumbers.length);
    answer.push(possibleNumbers[random]);
    possibleNumbers.splice([random], 1);
    console.log(answer);
    console.log(possibleNumbers);
  }
}

function checkAnswer() {
  let guess0 = document.getElementById("guess0").value,
    guess1 = document.getElementById("guess1").value,
    guess2 = document.getElementById("guess2").value,
    guess3 = document.getElementById("guess3").value;

  var guessToCheck = [guess0, guess1, guess2, guess3];
  document.getElementById("guessInputs").reset();
  console.log(guessToCheck);
  addGuessToPage(guessToCheck);
}

function addGuessToPage(array) {
  guessCount++;
  var element = document.getElementById("guesses");
  var formatted = array.forEach(guess => `<div class="guess">${guess}</div>`);
  console.log(formatted);
  element.insertAdjacentHTML("beforeend", `<div>${guessCount}.</div> ${array}`);
}
