const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CASES
console.log(assertEqual(head([5, 6, 7]), 5)); // Should pass
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")); // Should pass
console.log(assertEqual(head([]), undefined)); // Should pass
