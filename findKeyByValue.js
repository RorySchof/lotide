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

function findKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const map = {"first": "1", "Second": "2"};
console.log(findKeyByValue(map, "2"));

// TESTING

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);





