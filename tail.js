const assertEqual = function(actual, expected) {

  if (Array.isArray(actual) && Array.isArray(expected)) {
    let actualArray = ""; //Convert the arrays into strings so we can compare them
    let expectedArray = "";

    for (let i = 0; i < actual.length; i++) {
      actualArray += actual[i];
    }
    
    for (let j = 0; j < expected.length; j++) {
      expectedArray += expected[j];
    }
   
    if (actualArray === expectedArray) {
      console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
    }
  }


  else if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }


  
  
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

//console.log(tail(["re", "runner", "rats"])) Testing whether my tail function works

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

//Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements

assertEqual('hi','hi');
assertEqual(3, 'r2d2');

assertEqual(1,[1]);
