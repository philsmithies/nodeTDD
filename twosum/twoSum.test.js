const sum = require("./twoSum");

// Target Value minus the first value then if the rest of the array equals return those
describe("two sums tests", () => {
  test("it checks an array equals the target", () => {
    expect(sum([1, 2], 3)).toEqual([1, 2]);
  });
  test("it checks if the first number and one following equals the target", () => {
    expect(sum([1, 2, 3], 3)).toEqual([1, 2]);
  });
});
test.todo("it can work if the first number is not in the array");
