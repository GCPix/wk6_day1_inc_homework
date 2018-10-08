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
