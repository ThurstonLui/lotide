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
    console.log(eqArrays(array1,array2) + " , they are equal!")
  }
  else {
    console.log(eqArrays(array1, array2) + " , they are not equal!")
  }
} 

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { //Check that the index is not on a space
      if (results[sentence[i]]) { 
        results[sentence[i]].push(i); 
      }
      else {
        results[sentence[i]] = [i];
      }
    }
    
  }
  return results;
};

console.log(letterPositions("hello hello"));


assertArraysEqual(letterPositions("hello").l, [2,3]);