import { maxProfit } from "./index.js";

describe.each([
  { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
  { prices: [7, 6, 4, 3, 1], expected: 0 },
  { prices: [2, 1, 2, 1, 0, 1, 2], expected: 2 },
])("describe function maxProfit($prices)", ({ prices, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(maxProfit(prices)).toBe(expected);
  });
});
