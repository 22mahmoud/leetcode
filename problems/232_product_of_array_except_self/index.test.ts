import { productExceptSelf } from "./index.js";
import { large } from "./large.js";

describe.each([
   { nums: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
   { nums: [-1, 1, 0, -3, 3], expected: [0, 0, 9, 0, 0] },
   { nums: large.nums, expected: large.expected },
])("describe function productExceptSelf(nums)", ({ nums, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(productExceptSelf(nums)).toStrictEqual(expected);
  });
});
