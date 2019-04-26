input.onButtonPressed(Button.A, function() {
  page1();
});

function page1() {
  music.setTempo(120);
  // first staff
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  for (let i = 0; i < 4; i++) {
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Quarter));
    music.playTone(392, music.beat(BeatFraction.Quarter));
    if (i < 2) {
      music.playTone(392, music.beat(BeatFraction.Whole));
    } else {
      // second staff
      music.playTone(392, music.beat(BeatFraction.Half));
      music.playTone(349, music.beat(BeatFraction.Half));
    }
    music.rest(music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
  }
  for (let j = 0; j < 4; j++) {
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Whole));
    if (j === 0 || j === 2) {
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(392, music.beat(BeatFraction.Half));
      // third staff
    } else if (j === 1) {
      music.playTone(392, music.beat(BeatFraction.Half));
      music.playTone(392, music.beat(BeatFraction.Half));
    } else {
      music.playTone(392, music.beat(BeatFraction.Whole));
    }
  }
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Eighth));
  music.playTone(392, music.beat(BeatFraction.Eighth));
  music.playTone(392, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(523, music.beat(BeatFraction.Half));
  // fourth staff
  for (let k = 0; k < 2; k++) {
    music.playTone(622, music.beat(BeatFraction.Half));
    music.playTone(523, music.beat(BeatFraction.Quarter));
    music.playTone(523, music.beat(BeatFraction.Quarter));
    music.playTone(523, music.beat(BeatFraction.Half));
    music.playTone(466, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Whole));
    music.playTone(523, music.beat(BeatFraction.Half));
    if (k === 0) {
      music.playTone(523, music.beat(BeatFraction.Half));
    } else {
      music.playTone(622, music.beat(BeatFraction.Half));
    }
  }
  music.playTone(622, music.beat(BeatFraction.Half));
  music.playTone(622, music.beat(BeatFraction.Quarter));
  music.playTone(622, music.beat(BeatFraction.Quarter));
  music.playTone(622, music.beat(BeatFraction.Half));
  music.playTone(587, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
}

function page2() {
  // first staff
  for (let i = 0; i < 4; i++) {
    music.playTone(349, music.beat(BeatFraction.Half));
    music.playTone(349, music.beat(BeatFraction.Half));
    music.playTone(349, music.beat(BeatFraction.Half));
    music.playTone(349, music.beat(BeatFraction.Half));
    music.playTone(349, music.beat(BeatFraction.Half));
    music.playTone(349, music.beat(BeatFraction.Half));
    if (i === 0) {
      music.playTone(349, music.beat(BeatFraction.Half));
      music.playTone(349, music.beat(BeatFraction.Half));
    } else if (i === 1) {
      music.playTone(261, music.beat(BeatFraction.Whole));
    } else if (i === 2) {
      music.playTone(349, music.beat(BeatFraction.Whole));
      // second staff
    } else {
      music.playTone(330, music.beat(BeatFraction.Whole));
    }
  }
  for (let j = 0; j < 4; j++) {
    if (j < 3) {
      music.rest(music.beat(BeatFraction.Breve));
    } else {
      // third staff
      music.rest(music.beat(BeatFraction.Double));
      music.rest(music.beat(BeatFraction.Whole));
      music.playTone(262, music.beat(BeatFraction.Half));
      music.playTone(262, music.beat(BeatFraction.Quarter));
      music.playTone(262, music.beat(BeatFraction.Quarter));
    }
  }
  for (let k = 0; k < 14; k++) {
    music.playTone(349, music.beat(BeatFraction.Half));
  }
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Whole));
  for (let l = 0; l < 12; l++) {
    // fourth staff
    music.playTone(349, music.beat(BeatFraction.Half));
  }
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Quarter));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
}

function page3() {
  // first staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Whole));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Whole));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Whole));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Whole));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Whole));
  //second staff
  music.playTone(208, music.beat(BeatFraction.Double));
  music.playTone(262, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Whole));
  music.playTone(311, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Double));
  music.playTone(330, music.beat(BeatFraction.Double));
  music.playTone(392, music.beat(BeatFraction.Double));
  music.playTone(330, music.beat(BeatFraction.Double));
  music.playTone(208, music.beat(BeatFraction.Double));
  music.playTone(262, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(233, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  // third staff
  for (let i = 0; i < 11; i++) {
    music.rest(music.beat(BeatFraction.Whole));
  }
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  // fourth staff
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Double));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Double));
  music.rest(music.beat(BeatFraction.Breve));
  for (let j = 0; j < 8; j++) {
    music.playTone(349, music.beat(BeatFraction.Half));
  }
}

function page4() {
  // first staff
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Quarter));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Whole));
  for (let i = 0; i < 10; i++) {
    music.playTone(349, music.beat(BeatFraction.Half));
  }
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  // second staff
  music.rest(music.beat(BeatFraction.Breve));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(415, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  for (let j = 0; j < 6; j++) {
    music.playTone(262, music.beat(BeatFraction.Half));
  }
  music.rest(music.beat(BeatFraction.Breve));
  // third staff
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.playTone(208, music.beat(BeatFraction.Double));
  music.playTone(262, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Whole));
  music.playTone(311, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Double));
  music.playTone(330, music.beat(BeatFraction.Double));
  music.playTone(392, music.beat(BeatFraction.Double));
  music.playTone(330, music.beat(BeatFraction.Double));
  // fourth staff
  music.playTone(208, music.beat(BeatFraction.Double));
  music.playTone(262, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Double));
  music.playTone(311, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Double));
  music.playTone(233, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Half));
  music.playTone(262, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  for (let k = 0; k < 2; k++) {
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Quarter));
    music.playTone(392, music.beat(BeatFraction.Quarter));
    music.playTone(392, music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Half));
  }
  music.playTone(392, music.beat(BeatFraction.Half));
}

function page5() {
  // first staff
  for (let i = 0; i < 3; i++) {
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Quarter));
    music.playTone(392, music.beat(BeatFraction.Quarter));
    if (i === 0) {
      music.playTone(392, music.beat(BeatFraction.Whole));
    } else {
      music.playTone(392, music.beat(BeatFraction.Half));
      music.playTone(349, music.beat(BeatFraction.Half));
    }
    music.rest(music.beat(BeatFraction.Whole));
    music.rest(music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
  }
  for (let j = 0; j < 4; j++) {
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    music.playTone(392, music.beat(BeatFraction.Half));
    if (j === 0) {
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(392, music.beat(BeatFraction.Half));
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(392, music.beat(BeatFraction.Half));
      // second staff
    } else if (j === 1) {
      music.rest(music.beat(BeatFraction.Whole));
      music.playTone(392, music.beat(BeatFraction.Half));
      music.playTone(392, music.beat(BeatFraction.Half));
    } else if (j === 2) {
      music.rest(music.beat(BeatFraction.Whole));
      music.rest(music.beat(BeatFraction.Half));
      music.playTone(392, music.beat(BeatFraction.Half));
    } else {
      music.rest(music.beat(BeatFraction.Whole));
      music.playTone(392, music.beat(BeatFraction.Whole));
    }
  }
  music.playTone(392, music.beat(BeatFraction.Half));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Quarter));
  music.playTone(392, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  music.playTone(523, music.beat(BeatFraction.Half));
  // third staff
  for (let k = 0; k < 2; k++) {
    music.playTone(622, music.beat(BeatFraction.Half));
    music.playTone(523, music.beat(BeatFraction.Quarter));
    music.playTone(523, music.beat(BeatFraction.Quarter));
    music.playTone(523, music.beat(BeatFraction.Half));
    music.playTone(466, music.beat(BeatFraction.Half));
    music.rest(music.beat(BeatFraction.Whole));
    music.playTone(523, music.beat(BeatFraction.Half));
    if (k === 0) {
      music.playTone(523, music.beat(BeatFraction.Half));
    } else {
      music.playTone(622, music.beat(BeatFraction.Half));
    }
  }
  music.playTone(622, music.beat(BeatFraction.Half));
  music.playTone(622, music.beat(BeatFraction.Quarter));
  music.playTone(622, music.beat(BeatFraction.Quarter));
  music.playTone(622, music.beat(BeatFraction.Half));
  music.playTone(587, music.beat(BeatFraction.Half));
  music.playTone(523, music.beat(BeatFraction.Half));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Half));
  // fourth staff
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(466, music.beat(BeatFraction.Whole));
  music.playTone(349, music.beat(BeatFraction.Double));
  music.playTone(349, music.beat(BeatFraction.Whole));
  music.playTone(466, music.beat(BeatFraction.Half));
  music.playTone(466, music.beat(BeatFraction.Half));
  music.playTone(349, music.beat(BeatFraction.Whole));
  music.playTone(349, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Half));
  music.playTone(330, music.beat(BeatFraction.Double));
  music.playTone(330, music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Whole));
  music.rest(music.beat(BeatFraction.Breve));
  music.rest(music.beat(BeatFraction.Whole));
  music.playTone(466, music.beat(BeatFraction.Whole));
  music.playTone(349, music.beat(BeatFraction.Double));
}
