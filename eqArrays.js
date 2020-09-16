//Function that takes in two arrays and returns true if they are the same

const arrayConverter = function(arrayToString) {
  return arrayToString.join();
}

const eqArrays = function(array1, array2) {
    //Create version of arrays that can be compared (i.e. string)
    /*console.log(arrayConverter(array1));
    console.log(arrayConverter(array2));
    
    if (arrayConverter(array1) === arrayConverter(array2)) {
      return true;
    }

  return false;*/

  
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }        
    }
    return true;
  } 
  
  //If the arrays are not of the same length, they cannot be equal by default
  return false;
  
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false


console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);