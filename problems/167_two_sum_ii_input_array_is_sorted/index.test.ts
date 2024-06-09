import { twoSum } from './index.js';

describe.each([
  { target: 9, array: [2, 7, 11, 15], expected: [1, 2] },
  { target: 6, array: [2, 3, 4], expected: [1, 3] },
  { target: 0, array: [0, 0, 3, 4], expected: [1, 2] },
])('describe function twoSum($array, $target)', ({ target, array, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(twoSum(array, target)).toStrictEqual(expected);
  });
});
