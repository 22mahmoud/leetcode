import { longestPalindrome } from './index.js';

describe.each([
  { value: 'abccccdd', expected: 7 },
  { value: 'a', expected: 1 },
  { value: 'AB', expected: 1 },
  { value: 'bb', expected: 2 },
])('describe function longestPalindrome($value)', ({ value, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(longestPalindrome(value)).toStrictEqual(expected);
  });
});
