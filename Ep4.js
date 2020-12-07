let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//The first log will print Miss Scarlet, Professor Plum and Colonel Mustard because its calling upon suspects, which is equally to a function with not only declares suspects but changes the third to Colonel Mustard. 

//The second log will print Mrs. Peacock as the third suspect as it's called outside the functions and Mrs. Peacock is also defined outside the function.