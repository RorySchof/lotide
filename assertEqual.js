// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`โโโ Assertion Passed: ${actual} === ${expected}`);

    return true;

  } else {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
   
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

# lotide
# Test-Repo
