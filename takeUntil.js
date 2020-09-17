const eqArrays = function(array1, array2) {
  //Create version of arrays that can be compared (i.e. string)
  
  //Assuming lengths are the same, check if each element of the arrays is the same
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }        
    }
    return true;
  }
  return false;
} 

//Compare two arrays
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(eqArrays(array1,array2) + " , the arrays are equal")
  }
  else {
    console.log(eqArrays(array1, array2) + " , the arrays are NOT equal")
  }
} 


const takeUntil = function (array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item)) { //Don't want to add item to results if  the condition is satisfied
      results.push(item)
    }
    //Stop the array when it reaches the element that returns true
    else {
      return results;
    }
  }


}

//callBack to take in the item in the array

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual([1, 2, 5, 7, 2], results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(["I've", "been", "to", "Hollywood"], "results2" );
