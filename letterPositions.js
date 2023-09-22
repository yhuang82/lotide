// const letterPositions = function(sentence) {
//   const results = {};
//   // logic to update results here
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] !== " ") {
//       if (results[sentence[i]]) {
//         results[sentence[i]].push(i);
//       } else {
//         results[sentence[i]] = [i];
//       }
//     }
//   }

//   return results;
// };




const letterPositions = function(str) {
  const result = {};
  // logic to update results here
  for (const i in str) {
    const letter = str[i];

    if (i === " ") {
      continue;
    }

    if (!result[letter]) {
      result[letter] = [Number(i)];
    } else {
      result[letter].push(Number(i));
    }
  }
  return result;
};



console.log(letterPositions("lighthouse in the house"));
console.log("-------------------------------------------------");



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


assertArraysEqual(letterPositions("hello")["h"], [0]);
assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(letterPositions("hello")["o"], [4]);

