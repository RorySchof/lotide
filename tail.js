const assertEqual = require('./assertEqual');



// FUNCTION IMPLEMENTATION


/*  this section is commented out. Submit it and then delete and resubmit. 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    return true;

  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
   
};

*/


const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!