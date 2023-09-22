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





const flatten = arr => {
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array.');
  }

  const result = [];
  for (let outerItem of arr) {
    if (Array.isArray(outerItem)) {
      for (let item of outerItem) {
        result.push(item);
      }
    } else {
      result.push(outerItem);
    }
  }
  return result;
};

const result1 = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(result1, [1, 2, 3, 4, 5, 6]);