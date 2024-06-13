import { generateParenthesis } from './index.js';

describe.each([
  { n: 3, expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
  { n: 2, expected: ['(())', '()()'] },
  { n: 1, expected: ['()'] },
])('describe function generateParenthesis($n)', ({ n, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(generateParenthesis(n)).toIncludeSameMembers(expected);
  });
});
