const splitStrings = require("./splitStrings");

test.skip("it exists", () => {
  expect(splitStrings("abcdef")).toBe(["ab", "cd", "ef"]);
});
