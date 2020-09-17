const getObjectLength = function (object) {
  let counter = 0;
    for (item in object) {
      counter++;
    }
  return counter;
}
const eqArrays = function(array1, array2) {
  //Create version of arrays that can be compared (i.e. string)

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }        
    }
  return true;
  }
} 
const eqObjects = function(object1, object2) {
  if (getObjectLength(object1) === getObjectLength(object2)) { //Compare the objects only if they are the same length
    //Implement special case for arrays   
    for (key in object1) {
      //console.log(typeof(object1[key])); 
      //Check if a key in object1 is found in object2 (with matching values)
      if (typeof(object1[key]) === "object") {
        //console.log(key); Testing whether the condition above identifies the array keys correctly
        if (!eqArrays(object1[key],object2[key])) {
          return false;
        }
      }
      //Case for primitive data
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true;
  }
  return false;
  
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion passed:" + ${inspect(actual)} + "===" + ${inspect(expected)}`);
  }
  else {
    console.log(`😡😡😡Assertion failed:" + ${inspect(actual)} + "!==" + ${inspect(expected)}`);
  }
}

const cd = {  d: ["2", 3], c: "1" };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd,dc);