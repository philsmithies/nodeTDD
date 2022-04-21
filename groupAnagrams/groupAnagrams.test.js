const groupAnagrams = require("./groupAnagrams");

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

/**
 * TODO It can return true if two inputs are the same as each other
 * TODO
 */

test("it exists", () => {
  expect(groupAnagrams(["nat", "tan"]).check()).toBe(["nat", "tan"]);
});

test.skip("it can find the count of multiple strings", () => {
  expect(
    groupAnagrams([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]).find()
  ).toBe(3);
});
