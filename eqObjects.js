/*  EQ OBJECTS

Implement the definition for function eqObjects which will take in two objects 
and returns true or false, based on a perfect match

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

THIS IS A LONG ONE. REFER TO TEXT AND USE MENTOR. 

*/


// ASSERT EQUAL FUNCTION 
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    return true;

  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
   
};

// EQ ARRAYS FUNCTION 


const eqArrays = function(arr1,arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }

   for (let i = 0; i <arr1.length; i++){

     if (arr1[i] !== arr2[i])
      return false
   } 
return true;
 
};

// EQ Objects function

  const eqObjects = function(object1, object2){
    if (Object.keys(object1).length === Object.keys(object2).length){
      for(let key of Object.keys(object1)){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if(!eqArrays(object1[key], object2[key])) {
            return false;
          }
        }
      }
      return true;
  
    }
    return false;
  };

  console.log("success!")

  // TESTING

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false







