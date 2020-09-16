const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letterToCount) {
  letterObject = {};
  for (let letter of letterToCount) {
    if (letter !== " ") {
      if (letterObject[letter]) { //if it's a key value in letterObject already, just keep adding to it by 1
        letterObject[letter] += 1; 
      }
      else {
        letterObject[letter] = 1; //if it's not yet a key value in letterObject, need to initialize it with a number before incrementing it further
      }
    }
      
  }
  return letterObject;

}



console.log(countLetters("lighthouse in the house"));