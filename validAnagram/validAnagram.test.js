const validAnagram = require("./validAnagram.js");

test("it can check a single word", () => {
  expect(validAnagram("rat", "chicken")).toBe(false);
});

test("it can find an anagram", () => {
  expect(validAnagram("racecar", "racecar")).toBe(true);
});
