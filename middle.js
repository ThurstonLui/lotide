const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(eqArrays(array1,array2) + ": They are equal")
  }
  else {
    console.log(eqArrays(array1, array2) + ": They are not equal")
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



const middle = function(array) {
  let midArray = [];
  
  if (array.length >= 3) {  
  //2nd case: odd-numbered array
    if (array.length % 2 !== 0) {
      for (let i = 0; i < array.length; i++) {
        if (((array.length - 1) - i) === i) {
          midArray.push(array[i]);
        }
      }
    }
    //3rd case: even-numbered array
    else if (array.length % 2 === 0) {
      for (let j = 0; j < array.length; j++) {
        if ((j === (array.length - (j+2))) || (j === (array.length - j))) {
          midArray.push(array[j]);
        }
      }
    }
  }  
  return midArray;
}

console.log(middle([2,3,7,9,4,5]))
console.log(middle([4,9,5]));
console.log(middle([8,6,7,3,4,5,2]));

assertArraysEqual(middle([2,3,7,9,4,5]), [7,9]);
assertArraysEqual(middle([2,3,7,4,4,5]), [7,9]); 


assertArraysEqual(middle([2,3,5]), [3]);
assertArraysEqual(middle([2,3,7,9,4,5]), [7,8]);



