// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};





const findKey = (inputObj, callback) => {
  let result = undefined;
  for (let key in inputObj) {
    let subObj = inputObj[key];
    if (!callback(subObj)) {
      continue;
    }
    result = key;
    break;
  }
  return result;
};



const cb = x => x.stars === 2;
const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}; // => "noma"
const result = findKey(obj, cb);
assertEqual(result, "noma");


// falsey: "", 0, null, undefined, Nan, false