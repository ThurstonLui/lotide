const assert = require('chai').assert;
const middle = require('../middle');

describe("#tail", () => {
  it("returns [7, 9] for 2,3,7,9,4,5]", () => {
    assert.deepEqual(middle([2,3,7,9,4,5]), [7,9]);
  });
  it("returns [3] for [2,3,5]", () => {
    assert.deepEqual(middle([2,3,5]), [3]); 
  });
});

// assertArraysEqual(middle([2,3,7,9,4,5]), [7,9]);
// assertArraysEqual(middle([2,3,7,4,4,5]), [7,9]);


// assertArraysEqual(middle([2,3,5]), [3]);
// assertArraysEqual(middle([2,3,7,9,4,5]), [7,8]);
