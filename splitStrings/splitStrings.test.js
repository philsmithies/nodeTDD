const splitStrings = require("./splitStrings");

test("it exists", () => {
  expect(splitStrings("abcdef")).toBe(["ab", "cd", "ef"]);
});
