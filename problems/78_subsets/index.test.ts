import { subsets } from './index.js';

describe.each([
  { nums: [1, 2, 3], expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] },
  { nums: [0], expected: [[], [0]] },
])('describe function subsets($nums)', ({ nums, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(subsets(nums)).toIncludeSameMembers(expected);
  });
});
