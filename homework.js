let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  var murderer = 'Mrs. Peacock';
  console.log(murderer);
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
