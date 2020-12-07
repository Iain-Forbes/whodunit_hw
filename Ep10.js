const scenario = {
    murderer: 'Mrs. White',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
    
scenario.murderer = "Miss Scarlett"
    
const plotTwist = function(){
    
    if (scenario.murderer === 'Mrs. White');
    {
        scenario.murderer = 'Colonel Mustard';
    }

    }

const stichUp = function(){
    if (scenario.murderer === 'Colonel Mustard');
    {
        scenario.murderer = 'Professor Plum';
    }
    
    }
    

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}


plotTwist(); 
stichUp();
const verdict = declareMurderer();
console.log(verdict);