const sum = require("./twoSum");

// Target Value minus the first value then if the rest of the array equals return those
describe("two sums tests", () => {
  test("it checks an array equals the target", () => {
    expect(sum([1, 2], 3)).toEqual([1, 0]);
  });
  test("it can work if the first number is not in the array", () => {
    expect(sum([1, 2, 56, 17], 18)).toEqual([3, 0]);
  });
});
