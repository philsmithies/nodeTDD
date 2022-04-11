const containsDuplicate = require("./containsDuplicate");

describe("containsDuplicate", () => {
  test("it can check a two set array", () => {
    expect(containsDuplicate([1, 2])).toBe(false);
  });

  test("it can check a two set array for duplicates", () => {
    expect(containsDuplicate([1, 1])).toBe(true);
  });

  test("it works for larger arrays", () => {
    expect(containsDuplicate([1, 2, 1])).toBe(true);
  });
});
