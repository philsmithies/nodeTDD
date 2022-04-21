/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in 
 * any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or 
  phrase, typically using all the original letters exactly once.

  Example 1:

  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  Example 2:

  Input: strs = [""]
  Output: [[""]]
  Example 3:

  Input: strs = ["a"]
  Output: [["a"]]
 */

/**
 * ! take the array object and sort and check if its the same as the next one
 * ! you have an empty array it groups them all together the words that are the same
 */

const groupAnagrams = (stringArr) => {
  const newArr = [];
  console.log("string arr is", stringArr);
  const check = () => {
    if (stringArr) {
      stringArr.map((x, i) => {
        console.log(i);
        let sortedString = x.split("").sort().join("");
        if (sortedString === newArr[i]) {
          newArr.concat(sortedString);
        }
      });
    } else {
      return newArr;
    }
  };
  return {
    check,
  };
};

console.log("string arr is", groupAnagrams(["nat", "tan"]).check());

module.exports = groupAnagrams;
