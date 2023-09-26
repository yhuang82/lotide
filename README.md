# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yhuang82/lotide`

**Require it:**

`const _ = require('@yhuang82/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: A commonly used function for arrays is to retrieve the first element from the array. 
* `tail(...)`: The tail is meant to be every element except the head (first element) of the array.
* `middle(...)`: The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
* `assertArraysEqual(...)`: While the assertEqual is great at comparing primitive types (like numbers and strings), we could use another function for asserting that two arrays are equal.
* `assertEqual(...)`: check two value if it is strickly equal 
* `countLetters(...)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence. 
* `countOnly(...)`: This function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others. 
* `eqArrays(...)`: check two array are eqaul or not  
* `eqObjects(...)`: check two object are eqaul or not
* `findKey(...)`: Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(...)`: Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `letterPositions(...)`:  implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
* `map(...)`: map function will take in two arguments:
An array to map
A callback function
The map function will return a new array based on the results of the callback function.  
* `takeUntil(...)`: Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.  
* `without(...)`: Implement without which will return a subset of a given array, removing unwanted elements.