const lowAb = 208;
const lowBb = 233;
const midC = 262;
const midEb = 311;
const midE = 330;
const midF = 349;
const midG = 392;
const midAb = 415;
const midBb = 466;
const highC = 523;
const highD = 587;
const highEb = 622;
const highE = 659;

input.onButtonPressed(Button.A, function() {
  music.setTempo(120);
  page1();
});

function page1() {
  // first staff
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  for (let i = 0; i < 4; i++) {
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    if (i < 2) {
      music.playTone(midG, music.beat(BeatFraction.Whole));
    } else {
      // second staff
      music.playTone(midG, music.beat(BeatFraction.Half));
      music.playTone(midF, music.beat(BeatFraction.Half));
    }
    music.rest(music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
  }
  for (let j = 0; j < 4; j++) {
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Whole));
    if (j === 0 || j === 2) {
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(midG, music.beat(BeatFraction.Half));
      // third staff
    } else if (j === 1) {
      music.playTone(midG, music.beat(BeatFraction.Half));
      music.playTone(midG, music.beat(BeatFraction.Half));
    } else {
      music.playTone(midG, music.beat(BeatFraction.Whole));
    }
  }
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Eighth));
  music.playTone(midG, music.beat(BeatFraction.Eighth));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  // fourth staff
  for (let k = 0; k < 2; k++) {
    music.playTone(highEb, music.beat(BeatFraction.Half));
    music.playTone(highC, music.beat(BeatFraction.Quarter));
    music.playTone(highC, music.beat(BeatFraction.Quarter));
    music.playTone(highC, music.beat(BeatFraction.Half));
    music.playTone(midBb, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Whole));
    music.playTone(highC, music.beat(BeatFraction.Half));
    if (k === 0) {
      music.playTone(highC, music.beat(BeatFraction.Half));
    } else {
      music.playTone(highEb, music.beat(BeatFraction.Half));
    }
  }
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
}

function page2() {
  // first staff
  for (let i = 0; i < 4; i++) {
    music.playTone(midF, music.beat(BeatFraction.Half));
    music.playTone(midF, music.beat(BeatFraction.Half));
    music.playTone(midF, music.beat(BeatFraction.Half));
    music.playTone(midF, music.beat(BeatFraction.Half));
    music.playTone(midF, music.beat(BeatFraction.Half));
    music.playTone(midF, music.beat(BeatFraction.Half));
    if (i === 0) {
      music.playTone(midF, music.beat(BeatFraction.Half));
      music.playTone(midF, music.beat(BeatFraction.Half));
    } else if (i === 1) {
      music.playTone(261, music.beat(BeatFraction.Whole));
    } else if (i === 2) {
      music.playTone(midF, music.beat(BeatFraction.Whole));
      // second staff
    } else {
      music.playTone(midE, music.beat(BeatFraction.Whole));
    }
  }
  for (let j = 0; j < 4; j++) {
    if (j < 3) {
      music.rest(music.beat(BeatFraction.Breve));
    } else {
      // third staff
      music.rest(music.beat(BeatFraction.Double));
      music.rest(music.beat(BeatFraction.Whole));
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Quarter));
      music.playTone(midC, music.beat(BeatFraction.Quarter));
    }
  }
  for (let k = 0; k < 14; k++) {
    music.playTone(midF, music.beat(BeatFraction.Half));
  }
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Whole));
  for (let l = 0; l < 12; l++) {
    // fourth staff
    music.playTone(midF, music.beat(BeatFraction.Half));
  }
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
}

function page3() {
  // first staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  //second staff
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(lowBb, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  // third staff
  for (let i = 0; i < 11; i++) {
    music.rest(music.beat(BeatFraction.Whole));
  }
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  // fourth staff
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Breve));
  for (let j = 0; j < 8; j++) {
    music.playTone(midF, music.beat(BeatFraction.Half));
  }
}

function page4() {
  // first staff
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  for (let i = 0; i < 10; i++) {
    music.playTone(midF, music.beat(BeatFraction.Half));
  }
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  // second staff
  music.rest(music.beat(BeatFraction.Breve));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  for (let j = 0; j < 6; j++) {
    music.playTone(midC, music.beat(BeatFraction.Half));
  }
  music.rest(music.beat(BeatFraction.Breve));
  // third staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Double));
  // fourth staff
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(lowBb, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  for (let k = 0; k < 2; k++) {
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    music.playTone(midG, music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Half));
  }
  music.playTone(midG, music.beat(BeatFraction.Half));
}

function page5() {
  // first staff
  for (let i = 0; i < 3; i++) {
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    if (i === 0) {
      music.playTone(midG, music.beat(BeatFraction.Whole));
    } else {
      music.playTone(midG, music.beat(BeatFraction.Half));
      music.playTone(midF, music.beat(BeatFraction.Half));
    }
    music.rest(music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
  }
  for (let j = 0; j < 4; j++) {
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
    if (j === 0) {
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(midG, music.beat(BeatFraction.Half));
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(midG, music.beat(BeatFraction.Half));
      // second staff
    } else if (j === 1) {
      music.rest(music.beat(BeatFraction.Whole));
      music.playTone(midG, music.beat(BeatFraction.Half));
      music.playTone(midG, music.beat(BeatFraction.Half));
    } else if (j === 2) {
      music.rest(music.beat(BeatFraction.Whole));
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(midG, music.beat(BeatFraction.Half));
    } else {
      music.rest(music.beat(BeatFraction.Whole));
      music.playTone(midG, music.beat(BeatFraction.Whole));
    }
  }
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  // third staff
  for (let k = 0; k < 2; k++) {
    music.playTone(highEb, music.beat(BeatFraction.Half));
    music.playTone(highC, music.beat(BeatFraction.Quarter));
    music.playTone(highC, music.beat(BeatFraction.Quarter));
    music.playTone(highC, music.beat(BeatFraction.Half));
    music.playTone(midBb, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Whole));
    music.playTone(highC, music.beat(BeatFraction.Half));
    if (k === 0) {
      music.playTone(highC, music.beat(BeatFraction.Half));
    } else {
      music.playTone(highEb, music.beat(BeatFraction.Half));
    }
  }
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  // fourth staff
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Double));
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Double));
}

function page6() {
  // first staff
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Half));
  // second staff
  music.playTone(highE, music.beat(BeatFraction.Double));
  music.playTone(highE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Double));
  music.playTone(highE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  // third staff
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
}
