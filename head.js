const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }
};

//assertEqual("Bootcammp", "Bootcamp");
//assertEqual(12,1);

const head = function(array) {
  return array[0];
};

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

