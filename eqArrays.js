// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp"); // This will fail
// assertEqual(1, 1); // This will pass






// FUNCTION IMPLEMENTATION
const eqArrays = function(actualArr, expectedArr) {
  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // 

console.log(eqArrays([[1,2]], [[1,2]])); // => true







