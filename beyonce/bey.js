const midC = 262;
const midEb = 311;
const midG = 392;
const midAb = 415;
const midBb = 466;
const highC = 523;
const highD = 587;
const highEb = 622;
const highE = 659;
const highF = 698;
const highG = 784;

input.onButtonPressed(Button.A, function() {
  music.setTempo(120);
  page1();
});

function page1() {
  for (let i = 0; i < 6; i++) {
    // first staff (x2) + second staff (x4)
    music.rest(music.beat(BeatFraction.Double));
    music.rest(music.beat(BeatFraction.Whole));
    music.playTone(highC, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Half));
  }
  // third staff
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  // fourth staff
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highG, music.beat(BeatFraction.Quarter));
  music.playTone(highG, music.beat(BeatFraction.Quarter));
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highF, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
}

function page2() {
  // first staff
  for (let i = 0; i < 4; i++) {
    // last measure, start of second staff
    music.rest(music.beat(BeatFraction.Breve));
  }
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  // third staff
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  for (let j = 0; j < 14; j++) {
    music.playTone(midAb, music.beat(BeatFraction.Half));
  }
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  // fourth staff
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
}

function page3() {
  // first staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  // second staff
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(highC, music.beat(BeatFraction.Double));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midBb, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(highC, music.beat(BeatFraction.Double));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  // third staff
  for (let i = 0; i < 15; i++) {
    music.rest(music.beat(BeatFraction.Whole));
  }
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  // fourth staff
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
}

function page4() {
  // first staff
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midBb, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  // second staff
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Quarter));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Whole));
  // third staff
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(midBb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(highC, music.beat(BeatFraction.Double));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Double));
  music.playTone(midBb, music.beat(BeatFraction.Double));
  music.playTone(midG, music.beat(BeatFraction.Double));
  // fourth staff
  music.playTone(midC, music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Double));
  music.playTone(highC, music.beat(BeatFraction.Double));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midEb, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Whole));
  music.playTone(midG, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
}

function page5() {
  // first staff
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(midG, music.beat(BeatFraction.Half));
  // second staff
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  // third staff
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Quarter));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highG, music.beat(BeatFraction.Quarter));
  music.playTone(highG, music.beat(BeatFraction.Quarter));
  music.playTone(highG, music.beat(BeatFraction.Half));
  music.playTone(highF, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  // fourth staff
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Double));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Double));
}

function page6() {
  // first staff
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(midAb, music.beat(BeatFraction.Whole));
  music.playTone(midAb, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Whole));
  //second staff
  music.playTone(highE, music.beat(BeatFraction.Quarter));
  music.playTone(highD, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Half));
  music.playTone(highEb, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highD, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Half));
  music.playTone(highE, music.beat(BeatFraction.Whole));
  music.playTone(highE, music.beat(BeatFraction.Quarter));
  music.playTone(highD, music.beat(BeatFraction.Quarter));
  music.playTone(highC, music.beat(BeatFraction.Half));
  music.playTone(highC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  // third staff
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(midC, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
}
