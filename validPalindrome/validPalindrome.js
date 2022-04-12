// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// convert to lowercase check
// remove spaces check

const validPalindrome = (s) => {
  const PUNCTUATION = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  const removePunctuation = (string) => {
    return string
      .split("")
      .filter((letter) => {
        return PUNCTUATION.indexOf(letter) === -1;
      })
      .join("")
      .toLowerCase();
  };

  const string = removePunctuation(s);
  const reversedString = reverseString(string);
  if (string === reversedString) {
    return true;
  }
  return false;
};

module.exports = validPalindrome;
