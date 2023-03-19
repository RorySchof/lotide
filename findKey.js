function findKey (object, callback){
  let keys = Object.keys(object);
  for (let i = 0; i < result.length; i++){
    const key = keys[i];
    if (callback(object[keys](object))){
      return key;
    }
  }
   return undefined;
}

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

// TESTING

assertEqual(2, 3)
assertEqual(2, 2)



