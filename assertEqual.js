/*const sum = function(a,b) {
  return  a + b;
};

const sumBuggy = function(a,b) {
  return a * b;
}

console.assert(sum(1,2) === 4);
console.assert(sum(1,20) === 3);*/

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("😁️Assertion Passed: " + actual + " === " + expected);
  }
  
  else if (actual !== expected) {
    console.log("😡️ Assertion failed: " + actual + " !== " + expected);
  }
};

assertEqual("Bootcamp", "Bootcamp");
assertEqual(12,1);
