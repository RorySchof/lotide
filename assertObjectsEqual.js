/*
ASSERT EQUAL OBJECTS
*/

  const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length === Object.keys(object2).length) {
      for (let key of Object.keys(object1)) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { 
          if (!eqArrays(object1[key], object2[key])) {
            return false;
          }
        } else if (object1[key] !== object2[key]) { 
          return false;
        }
      }
      return true;
    }
    return false;
  }


  // FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {

  const assertObjectEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected) === true) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
};

console.log("success!")