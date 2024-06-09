import { lengthOfLongestSubstring } from './index.js';

describe.each([
  { target: ' ', expected: 1 },
  { target: '', expected: 0 },
  { target: 'abcabcbb', expected: 3 },
  { target: 'pwwkew', expected: 3 },
  { target: 'au', expected: 2 },
])('describe function lengthOfLongestSubstring($target)', ({ target, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(lengthOfLongestSubstring(target)).toBe(expected);
  });
});
