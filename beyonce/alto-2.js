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
}
