const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    return false;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actualArr, expectedArr) {
  if (eqArrays(actualArr, expectedArr)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};


const without = function(sourceArr, itemsToRemoveArr) {
  let resultArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    for (let j = 0; j < itemsToRemoveArr.length; j++) {
      if (sourceArr[i] === itemsToRemoveArr[j]) {
        break;
      } else if (j === itemsToRemoveArr.length - 1) {
        resultArr.push(sourceArr[i]);
      }
    }
  }
  return resultArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3, 5, 7], [1, 4, 5, 8]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);