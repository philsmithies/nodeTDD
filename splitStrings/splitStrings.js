const splitStrings = (inputString) => {
  let result = [];
  let concat = "";
  for (i = 0; i <= inputString.length; i++) {
    concat += inputString[i];
    if (concat.length % 2 === 0) {
      result.push(concat);
      concat = "";
    } else if (concat.length == 1 && i == inputString.length - 1) {
      result.push(concat + "_");
      concat = "";
    }
  }
  return result;
};

// console.log("the strings are ", splitStrings("abcdef"));
console.log("the odd strings are ", splitStrings("abcdefg"));

module.exports = splitStrings;
