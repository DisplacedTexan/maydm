const lowB = 123;
const lowC = 131;
const lowDb = 139;
const lowEb = 156;
const lowG = 196;
const lowAb = 208;
const lowBb = 233;
const midC = 262;
const midDb = 277;
const midD = 293;
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
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  //second staff (same as Alto 1)
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Breve));
  // third staff
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  // fourth staff
  for (let i = 0; i < 2; i++) {
    music.playTone(lowEb, music.beat(BeatFraction.Half));
    music.playTone(lowG, music.beat(BeatFraction.Quarter));
    music.playTone(midC, music.beat(BeatFraction.Quarter));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midD, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Whole));
    music.playTone(midE, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Half));
  }
  music.playTone(lowEb, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midD, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
}

function page2() {
  // first staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  // second staff
  music.rest(music.beat(BeatFraction.Breve));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  // third staff
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  music.playTone(lowG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  // fourth staff
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Whole));
  music.playTone(lowG, music.beat(BeatFraction.Whole));
  for (let i = 0; i < 3; i++) {
    music.rest(music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(lowC, music.beat(BeatFraction.Whole));
  }
}

function page3() {
  // first staff
  for (let i = 0; i < 5; i++) {
    music.rest(music.beat(BeatFraction.Half));
    if (i === 1) {
      music.playTone(midDb, music.beat(BeatFraction.Half));
      music.playTone(midDb, music.beat(BeatFraction.Half));
      music.playTone(midDb, music.beat(BeatFraction.Half));
      music.playTone(midDb, music.beat(BeatFraction.Half));
      music.playTone(midDb, music.beat(BeatFraction.Half));
    } else {
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
      if (i === 0 || i === 4) {
        music.playTone(midC, music.beat(BeatFraction.Half));
        music.playTone(midC, music.beat(BeatFraction.Half));
      } else {
        music.playTone(midDb, music.beat(BeatFraction.Half));
        music.playTone(midDb, music.beat(BeatFraction.Half));
      }
    }
    music.playTone(lowC, music.beat(BeatFraction.Whole));
  }
  // second staff
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowBb, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  // third staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  for (let j = 0; j < 5; j++) {
    // fourth staff after 1st loop
    music.rest(music.beat(BeatFraction.Half));
    if (j === 2 || j === 3) {
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
      music.playTone(lowC, music.beat(BeatFraction.Whole));
    } else {
      music.playTone(lowDb, music.beat(BeatFraction.Half));
      music.playTone(lowDb, music.beat(BeatFraction.Half));
      music.playTone(lowDb, music.beat(BeatFraction.Half));
      music.playTone(lowDb, music.beat(BeatFraction.Half));
      music.playTone(lowEb, music.beat(BeatFraction.Half));
      if (j === 1) {
        music.playTone(lowC, music.beat(BeatFraction.Whole));
      } else {
        music.playTone(lowDb, music.beat(BeatFraction.Whole));
      }
    }
  }
}

function page4() {
  // first staff
  for (let i = 0; i < 3; i++) {
    music.rest(music.beat(BeatFraction.Half));
    music.playTone(lowDb, music.beat(BeatFraction.Half));
    music.playTone(lowDb, music.beat(BeatFraction.Half));
    music.playTone(lowDb, music.beat(BeatFraction.Half));
    music.playTone(lowDb, music.beat(BeatFraction.Half));
    music.playTone(lowEb, music.beat(BeatFraction.Half));
    if (i === 1) {
      music.playTone(lowDb, music.beat(BeatFraction.Whole));
    } else {
      music.playTone(lowC, music.beat(BeatFraction.Whole));
    }
  }
  for (let j = 0; j < 8; j++) {
    // second staff after 1st loop
    // third staff after 5th loop
    if (j === 3) {
      music.playTone(midC, music.beat(BeatFraction.Half));
    } else {
      music.rest(music.beat(BeatFraction.Half));
    }
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(lowC, music.beat(BeatFraction.Whole));
  }
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  // fourth staff
  music.playTone(lowAb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowBb, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
}

function page5() {
  // first staff
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  // second staff
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  // third staff
  for (let i = 0; i < 3; i++) {
    music.playTone(lowEb, music.beat(BeatFraction.Half));
    music.playTone(lowG, music.beat(BeatFraction.Quarter));
    music.playTone(midC, music.beat(BeatFraction.Quarter));
    music.playTone(midC, music.beat(BeatFraction.Half));
    music.playTone(midD, music.beat(BeatFraction.Half));
    if (i === 2) {
      music.rest(music.beat(BeatFraction.Double));
    } else {
      music.playTone(midC, music.beat(BeatFraction.Whole));
      music.playTone(midE, music.beat(BeatFraction.Half));
      music.rest(music.beat(BeatFraction.Half));
    }
  }
  // fourth staff
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Quarter));
  music.playTone(lowG, music.beat(BeatFraction.Quarter));
  music.playTone(lowG, music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
}

function page6() {
  // first staff
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowG, music.beat(BeatFraction.Half));
  music.playTone(lowG, music.beat(BeatFraction.Quarter));
  music.playTone(lowG, music.beat(BeatFraction.Quarter));
  music.playTone(lowG, music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Half));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(lowAb, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Quarter));
  music.playTone(midEb, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  // second staff
  music.playTone(midE, music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Quarter));
  music.playTone(midEb, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midE, music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
}
