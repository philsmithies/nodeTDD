const buySellStock = require("./buySellStock");

test("it can find the cheapest day to buy stock", () => {
  expect(buySellStock([1, 2, 3]).findMin()).toBe(1);
});

test("it can find the highest day to buy stock", () => {
  expect(buySellStock([1, 2, 3]).findMax()).toBe(3);
});

test("it can find the best days to buy stock in ascending order", () => {
  expect(buySellStock([1, 2, 3]).minMax()).toEqual([1, 3]);
});

test("it can find the best day to buy and sell stock not in order", () => {
  expect(buySellStock([3, 1, 5]).minMax()).toEqual([1, 5]);
});

test("it works with a long set", () => {
  expect(buySellStock([7, 1, 5, 3, 6, 4]).minMax()).toBe(5);
});

test("it return 0 if no day is found cheaper than the buy day", () => {
  expect(buySellStock([3, 2, 1]).minMax()).toEqual(0);
});
