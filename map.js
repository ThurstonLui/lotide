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
    console.log(eqArrays(array1,array2) + " , both are equal")
  }
  else {
    console.log(eqArrays(array1, array2) + " , both are NOT equal")
  }
} 



const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
  const results = [];
  // console.log('array', array);
  // console.log('callback', callback)
  for (let item of array) {
    // console.log("item BEFORE: ", item)
    // console.log("item AFTER", callback(item))
    results.push(callback(item));
  }
  return results;
  
}

const results1 = map(words, word => word[0])
const results2 = map(words, word => word)
const results3 = map(words, word => word[word.length - 1])

//Test cases
assertArraysEqual(results1, ["g", "c", "t" , "m", "t"])
assertArraysEqual(results2, ["ground", "control", "to", "major", "tom"])
assertArraysEqual(results3, ["d", "l", "o", "r", "m"])


