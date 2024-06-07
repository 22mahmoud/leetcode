import { maxSubArray } from "./index.js";

describe.each([
  { array: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
  { array: [1], expected: 1 },
  { array: [5, 4, -1, 7, 8], expected: 23 },
])("describe function maxSubArray($array)", ({ array, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(maxSubArray(array)).toBe(expected);
  });
});

