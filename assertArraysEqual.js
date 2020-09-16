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
    console.log(eqArrays(array1,array2) + " === true")
  }
  else {
    console.log(eqArrays(array1, array2) + " === false")
  }
} 

assertArraysEqual(["1", "2", "3"], ["1", "2", 3])
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [3, 3, 4])