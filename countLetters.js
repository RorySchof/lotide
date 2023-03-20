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

const variableName = "boo";

const countLetters = function(string) {
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    if (!obj[string[i]]){
      obj[string[i]] = 1;}  

  else {obj[string[i]]+= 1}}
  console.log(obj);
};

countLetters(variableName);



