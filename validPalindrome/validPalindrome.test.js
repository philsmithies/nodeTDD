const validPalindrome = require("./validPalindrome");

test("it can check a palidrome is lower case", () => {
  expect(validPalindrome("racecar")).toBe(true);
});

test("it can return false for something not a palidrome", () => {
  expect(validPalindrome("chasecar")).toBe(false);
});

test("it can strip punctuation", () => {
  expect(validPalindrome("race.car")).toBe(true);
});

test("it works with different casing", () => {
  expect(validPalindrome("Racecar")).toBe(true);
});

test("it can work with punctuation", () => {
  expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});
