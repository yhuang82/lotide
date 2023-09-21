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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countStringNum = (itemArr, firstName) => {
  let count = 0;
  for (let item of itemArr) {
    if (item === firstName) {
      count += 1;
    }
  }
  return count;
};

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let attendees in itemsToCount) {
    if (itemsToCount[attendees]) {
      if (allItems.includes(attendees)) {
        const firstNameCount = countStringNum(allItems, attendees);
        result[attendees] = firstNameCount;
      }
    }
  }
  return result;
};



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);