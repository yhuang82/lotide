// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = (sentence) => {
  const sentenceWithoutSpaces = sentence.replace(/\s/g, '');
  const result = {};
  for (let item of sentenceWithoutSpaces) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};


console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("Jason")["J"], 1);
assertEqual(countLetters("Karima is a abc")["a"], 4);
