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

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Mrs. White is the the murderer, changeMurderer() is being called which has the nested function plotTwist(), this alters the murderer variable when its called within changeMurderer(), setting it to Mrs White. 