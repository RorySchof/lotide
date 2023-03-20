// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    return true;

  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
   
};


// TEST CODE

/*  Commented out and moved to another file

console.log(assertEqual("Lighthouse Labs", "Bootcamp")"";
assertEqual(1, 1);

*/


module.exports = assertEqual;
