// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // This will fail
assertEqual(1, 1); // This will pass


const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
};

// TEST CASES
console.log(assertEqual(head([5,6,7]), 5));  // Should pass
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));  // Should pass
console.log(assertEqual(head([]), undefined));  // Should pass