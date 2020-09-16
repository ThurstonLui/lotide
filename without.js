const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(eqArrays(array1,array2) + " === true")
  }
  else {
    console.log(eqArrays(array1, array2) + " === false")
  }
} 

const eqArrays = function(array1, array2) {

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

//Return a subset of a source array that excludes specified items

const without = function(source, itemsToRemove) {
  let newArray = [];
  //Take every item in itemsToRemove, and remove the element in source that matches that itemsToRemove item 
  let blacklistedIndexes = [];  
  //Blacklist all indexes in source that has an element that matches with an element in itemsToRemove
  for (let i = 0; i < itemsToRemove.length; i++) {
    
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] === source[j]) {
        blacklistedIndexes.push(j);

      }
    }
  }  

  //Add all indexes of source into newArray that are no included in my blacklistedIndexes
  for (let k = 0; k < source.length; k++) {
    if (!blacklistedIndexes.includes(k)) {
      newArray.push(source[k]);
    }
  }

  return newArray;

  
}


console.log(without([1, 2, 3], [1]) );
console.log(without(["1", "2", "3", "4", 1, 5], [1, 2, "3"])); 

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
