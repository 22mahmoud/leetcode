import { subarraysDivByK } from './index.js';

describe.each([
  { k: 5, nums: [4, 5, 0, -2, -3, 1], expected: 7 },
  { k: 9, nums: [5], expected: 0 },
  { k: 2, nums: [-1, 2, 9], expected: 2 },
])('describe function subarraysDivByK ($nums, $k)', ({ nums, k, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(subarraysDivByK(nums, k)).toBe(expected);
  });
});
