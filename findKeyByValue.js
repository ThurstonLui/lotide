const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, matchValue) {
  
  for (key in object) { //loop thru whole object to see if matchValue is present
    if (key === matchValue) {
      return object[key];
    }

  } 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "drama"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
