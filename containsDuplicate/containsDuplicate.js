// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = (array) => {
  const arrayFiltered = array.filter(
    (item, index) => array.indexOf(item) !== index
  );

  if (arrayFiltered.length == 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = containsDuplicate;
