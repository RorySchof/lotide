// const assertEqual = require('./assertEqual');
// Commmenting out the above code because I'll need it later but not now. 

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

// TESTING

eqArrays([1, 2, 3], [1, 2, 3])x // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

