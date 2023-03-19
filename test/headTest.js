const assertEqual = require('../assertEqual');


/* this code is commented out for a later section . keep code. 

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

*/

//Everything below is from the new section. 

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});

