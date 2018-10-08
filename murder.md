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

would return 'Miss Scarlet'

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

murderer is a const so you shouldn't be able to change the value.  The murderer variable in changeMurderer is global which is bad anyway but I think the biggest part is you cannot change a const.
Note for me! no matter what episode 2 looks like it will always show professor plum because the change to Mrs Peacock is inside the function.

Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

would return Mrs Peacock
const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

would return Professor Plum

Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
would return 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard'
console.log(`Suspect three is ${suspectThree}.`);
Suspect three is Mrs Peacock

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
 // returns Colonel Mustard
changeMurderer();
// Mrs White, both green and white are global and the function was run within function for changeMurderer so this time it would should

const verdict = declareMurderer();
console.log(verdict);


Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
Mr Green is returned.  I think this is because he is global therefor overrules the let? Miss Scarlet is also global but is nested within postTwist which is a let so doesn't take over.  If unexpectedOutcome was above plotTwist she would have been the returned value.

Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
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

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

all variables are const but it doesn't stop me from altering the objects attributes.  I change the murderer to Col Mustard using unexpectedOutcome which means the if statement works for plotTwist.  

Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//professor plum, it isn't a const so can be changed but unless Mrs Peacock was global which she shouldn't be it wouldn't allow it. I have been able to figure out that if the intial one is assigned as let you cannot change this unless you just don't specify anything.  If it is var you can use let inside a function because the same name will mean different things wihin the function and outwith but anything else is basically bad!
