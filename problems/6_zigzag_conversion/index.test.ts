import { convert } from './index.js';

describe.each([
  { case: '', expected: 5 },
])('describe function convert($case)', ({ case, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(convert(case)).toBe(expected);
  });
});
