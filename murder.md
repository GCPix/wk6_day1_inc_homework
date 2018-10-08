Scope Homework: Who Dunnit
Learning Objectives
Understand function scope
Know the difference in between the let and const keywords
Brief
Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

MVP
Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//would return 'Miss Scarlet'

Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// plum is a const so changeMurderer isn't allowed to assign a new value even if we made peacock a let it would only be true within changeMurderer so verdict would never pick up on it. the initial constant would have to be a let and changeMurderer would have to be called within declareMurderer as declareMurderer(changeMurderer) before it would be seen.

Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock'; //only available within this block
  return `The murderer is ${murderer}.`; //without the return line this comes back as undefined
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

//would return Mrs Peacock
const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// comes back as professor Plum, essentially this is available at the same level as const secondVerdict.  Based on this code alone shouldn't the murderer at the top be a const rather than let?


Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';
//three above are available at same level as the console.log lines and suspects variable and to declareAllSuspects.  if they were const nothing would change, so they should be const?
const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard'; // because this exists within the block it will not look outside for it
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// would return 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'
console.log(`Suspect three is ${suspectThree}.`);
//Suspect three is Mrs Peacock

Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

weapon would be revolver because although you cannot change the object in its entirety you can change an attribute value

Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}
 // returns Colonel Mustard because it isn't calling anything else
changeMurderer();
//let allows it to be modified so when changeMurderer is called it changes it to Mr Green but before the end of the block the nested plotTwist is called so this ends up being the murderer.  if it hadn't been called it would still be green regardless of the nested function.

// let on the initial murderer variable allows it to be assigned a new value. if this had been const I would have got an error Assignment to constant variable.

const verdict = declareMurderer();
console.log(verdict);
//mrs white




Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';
  // returns mr green

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';

    }
    // returns mustard - we are still in the plotTwist block and it is a let
   unexpectedOutcome();
   //returns miss scarlet - unexpectedOutcome has been called and the plotTwistblock still hasn't closed
  }
// returns green
  plotTwist();
//returns green - is this because mustard is only available within plotTwist
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Mr Green is returned. If I comment him out Professor Plum is returned so it is ignoring mustard and scarlet. they seem to live locally within their block


Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {//as this is the top level in the nest it is the only one that can be run outwith this block
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard'); //nested inside plotTwist so needs to be called before that block ends otherwise not defined
  }
  plotTwist('Dining Room'); //plotTwist is nested inside changeScenario to run it I have to call it after the plotTwist block closes but before the changeScenario block closes otherwise not defined.

}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// all variables are const but it doesn't stop me from altering the objects attributes.  I change the murderer to Col Mustard using unexpectedOutcome which means the if statement works for plotTwist.


Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock'; //let means it only exists within the block, remove let and it will allow mrs peacock to return
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
