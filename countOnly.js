const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😁️Assertion Passed: ${actual} === ${expected}`);
  }
  
  else if (actual !== expected) {
    console.log(`😡️ Assertion failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let countObject = {};
  //Loop through the itemsToCount object- check if items is in the AllItems array
  for (let item in itemsToCount) {
    //Use that item to loop thru the allItems array, counting everytime items encounters the same value in the array
    if (itemsToCount[item] === true) {
      let counter = 0;
      for (let i = 0; i < allItems.length; i++) {
      
        if (item === allItems[i]) {
          counter++;
          countObject[item] = counter;
          
        }
      }
      
      
    }
  }
  return countObject;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  
];

//console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);