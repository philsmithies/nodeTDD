// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Target Value minus the first value then if the rest of the array equals return those
// if two numbers in the array add up to it then return those numbers

const twoSum = (array, target) => {
  let result = [];
  for (i = 0; i < array.length; i++) {
    for (counter = 0; counter < array.length; counter++) {
      if (array[i] + array[counter] === target) {
        result = [counter, i];
      }
    }
  }
  return result;
};

module.exports = twoSum;
