
//const assertEqual = require('./assertEqual');
// I've commented out the above line because it's needed for a later excercsie but not this one

// FUNCTION IMPLEMENTATION


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

    return true;

  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
   
};

// FUNCTION IMPLEMENTATION

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
    return false;
   }
  return true;
 
};

// FUNCTION IMPLEMENTATION MIDDLE

let middle = function(array1) {

  if (array1.legth < 3) {
    return [];}

  else if (array1.length % 2 === 0) {
    console.log("test");
    console.log(Math.ceil(array1.length / 2) - 1);
    console.log(Math.ceil(array1.length / 2));
    return [array1[Math.ceil(array1.length / 2) - 1],  array1[Math.ceil(array1.length / 2)]];}
  else{
    return [array1[Math.floor(array1.length / 2 )]]}};

// I've left the console.log statements above to show my testing. 

/*
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 

*/

console.log(middle([1, 2, 3, 4, 5, 6]) );










