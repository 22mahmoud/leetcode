import { checkSubarraySum } from './index.js';

describe.each([
  { k: 13, nums: [23, 2, 6, 4, 7], expected: false },
  { k: 6, nums: [23, 2, 6, 4, 7], expected: true },
  { k: 6, nums: [23, 2, 4, 6, 7], expected: true },
  { k: 7, nums: [23, 2, 4, 6, 6], expected: true },
])('describe function checkSubarraySum($nums, $k)', ({ nums, k, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(checkSubarraySum(nums, k)).toBe(expected);
  });
});
