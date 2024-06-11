import { exist } from './index.js';

describe.each([
  {
    word: 'ABCCED',
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    expected: true,
  },
  {
    word: 'SEE',
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    expected: true,
  },
  {
    word: 'ABCB',
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    expected: false,
  },
  {
    word: 'ABCCED',
    board: [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    expected: true,
  },

  {
    word: 'a',
    board: [['a']],
    expected: true,
  },
])('describe function exist($board, $word)', ({ board, word, expected }) => {
  test(`Returns ${expected}`, () => {
    expect(exist(board, word)).toBe(expected);
  });
});
