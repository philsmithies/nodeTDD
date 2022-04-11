// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Target Value minus the first value then if the rest of the array equals return those

const twoSum = (array, target) => {
  let amount = 0;
  array.map((x) => {
    amount += x;
  });
  if (amount === target) {
    return array;
  } else {
    return false;
  }
};

twoSum([1, 2], 3);

module.exports = twoSum;
