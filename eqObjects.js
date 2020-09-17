const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const getObjectLength = function (object) {
  let counter = 0;
    for (item in object) {
      counter++;
    }
  return counter;
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
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true;
  }
  return false;
  
};




/*const ab = { a: "1", b: "2"};

const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false*/

const cd = {  d: ["2", 3], c: "1" };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, "4"] };
console.log(eqObjects(cd, cd2)); // => false




