
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

// EQ ARRAYS FUNCTION IMPLEMENTATION


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

// LETTER POSITION FUNCTION IMPLEMENTATION 

const letterPositions = function(sentence) {
  let results = {};
    for (let i = 0; i < sentence.length; i++){
      if (results[sentence[i]] && sentence[i] !== " "){
        results = {...results,[sentence[i]]:[...results[sentence[i]],i]};

        }
       else {
        results = {...results,[sentence[i]]:[i]};
      }
  }

  // logic to update results here
  return results;
};

console.log(letterPositions("today is a beautiful day"))