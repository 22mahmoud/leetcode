import { letterCombinations } from './index.js';

describe.each([
  { digits: '23', expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] },
  { digits: '', expected: [] },
  { digits: '2', expected: ['a', 'b', 'c'] },
  {
    digits: '234',
    expected: [
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ],
  },
])('describe function letterCombinations($digits)', ({ digits, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(letterCombinations(digits)).toStrictEqual(expected);
  });
});
