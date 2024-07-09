type Digits = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

const mobile = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];

  const result: string[] = [];

  function backtrack(index: number, path: string) {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    for (const letter of mobile[digits[index] as Digits]) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, '');

  return result;
}

export { letterCombinations };
