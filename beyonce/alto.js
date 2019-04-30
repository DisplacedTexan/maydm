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
  page3();
});

function page1() {
  // first staff
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  //second staff
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
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Quarter));
  music.playTone(midE, music.beat(BeatFraction.Quarter));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  // fourth staff
  for (let i = 0; i < 2; i++) {
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    music.playTone(midG, music.beat(BeatFraction.Quarter));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midF, music.beat(BeatFraction.Half));
    music.playTone(midC, music.beat(BeatFraction.Whole));
    music.playTone(midG, music.beat(BeatFraction.Half));
    music.playTone(midG, music.beat(BeatFraction.Half));
  }
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
}

function page2() {
  // first staff
  for (let i = 0; i < 14; i++) {
    music.playTone(midDb, music.beat(BeatFraction.Half));
  }
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Whole));
  // second staff
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  // third staff
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  for (let j = 0; j < 14; j++) {
    music.playTone(midDb, music.beat(BeatFraction.Half));
  }
  music.playTone(midDb, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Whole));
  for (let j = 0; j < 12; j++) {
    // fourth staff
    music.playTone(midDb, music.beat(BeatFraction.Half));
  }
  music.playTone(midDb, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
}

function page3() {
  // first staff
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Whole));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  // second staff
  for (let i = 0; i < 2; i++) {
    music.playTone(lowAb, music.beat(BeatFraction.Whole));
    music.playTone(lowAb, music.beat(BeatFraction.Half));
    music.playTone(lowAb, music.beat(BeatFraction.Half));
    music.playTone(lowAb, music.beat(BeatFraction.Double));
    music.playTone(lowAb, music.beat(BeatFraction.Whole));
    music.playTone(lowAb, music.beat(BeatFraction.Half));
    music.playTone(lowAb, music.beat(BeatFraction.Half));
    music.playTone(lowAb, music.beat(BeatFraction.Double));
    if (i === 0) {
      music.playTone(midG, music.beat(BeatFraction.Double));
      music.playTone(midC, music.beat(BeatFraction.Double));
      music.playTone(midC, music.beat(BeatFraction.Double));
      music.playTone(midE, music.beat(BeatFraction.Double));
    } else {
      music.playTone(lowG, music.beat(BeatFraction.Whole));
      music.playTone(lowG, music.beat(BeatFraction.Half));
      music.playTone(lowG, music.beat(BeatFraction.Half));
      music.playTone(lowG, music.beat(BeatFraction.Double));
      music.playTone(lowG, music.beat(BeatFraction.Whole));
      music.playTone(lowG, music.beat(BeatFraction.Half));
      music.playTone(lowG, music.beat(BeatFraction.Whole));
      music.playTone(lowG, music.beat(BeatFraction.Half));
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(midC, music.beat(BeatFraction.Half));
    }
  }
  // third staff
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.playTone(midF, music.beat(BeatFraction.Whole));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Half));
  music.playTone(midE, music.beat(BeatFraction.Half));
  music.playTone(midD, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Quarter));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midDb, music.beat(BeatFraction.Quarter));
  music.playTone(midDb, music.beat(BeatFraction.Quarter));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Quarter));
  music.playTone(midDb, music.beat(BeatFraction.Quarter));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midEb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  // fourth staff
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Quarter));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midF, music.beat(BeatFraction.Half));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
  music.playTone(midDb, music.beat(BeatFraction.Half));
}
