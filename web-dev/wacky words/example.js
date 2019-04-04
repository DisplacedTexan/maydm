/*
  document.getElementById(ELEMENT_ID) is how we access the HTML on the page.
  These three variables are used to manipulate the HTML by showing or hiding pieces.

*/
var storyDiv = document.getElementById("theStory");
var wordsDiv = document.getElementById("words");
var form = document.getElementById("wordInput");

function tellStory() {
  // Here, we are getting the value of the input element by the ID.
  var name = document.getElementById("name").value;
  var place = document.getElementById("place").value;
  var number = document.getElementById("number").value;
  var time = document.getElementById("time").value;
  var animal = document.getElementById("animal").value;
  var adjective = document.getElementById("adjective").value;
  var friend = document.getElementById("friend").value;

  /*
    What if you get a unit of time that should be plural? Or what if you get a
    plural unit of time that should be singular? This function will check both
    the submitted number and time to make sure they match so the story makes sense.
  */
  time = checkNumber(number, time);

  var story = `<p>Once upon a time, ${name} was walking to ${place}. It felt like ${name}
  had been walking forever but really it was ${number} ${time}. Suddenly a talking
  ${animal} appeared and asked ${name} where they were going. </p>`;

  story += `<p>${name} didn't trust this ${animal} because of their ${adjective} eyes and besides,
  everyone knows not to trust a talking ${animal}. ${name} ignored the ${animal} and kept
  walking until they saw their friend ${friend}.</p>`;

  storyDiv.classList.remove("hidden");
  storyDiv.innerHTML = story;

  wordsDiv.classList.add("hidden");
}

function checkNumber(number, time) {
  // parseInt turns the string received into an actual number
  number = parseInt(number);

  if (number !== 1 && time.slice(-1) != "s") {
    // if number is NOT 1 and the unit of time does NOT end in s, add an s
    time += "s";
  } else if (number === 1 && time.slice(-1) == "s") {
    // if the number is 1 & the unit of time DOES end in s, remove it
    time = time.slice(0, -1);
  }

  // The time variable needs to be returned because it might have changed.
  return time;
}

function resetStory() {
  form.reset();
}
