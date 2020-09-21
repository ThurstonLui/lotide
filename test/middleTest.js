const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([2,3,7,9,4,5]), [7,9]);
assertArraysEqual(middle([2,3,7,4,4,5]), [7,9]);


assertArraysEqual(middle([2,3,5]), [3]);
assertArraysEqual(middle([2,3,7,9,4,5]), [7,8]);
