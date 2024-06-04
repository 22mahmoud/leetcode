function longestPalindrome(s: string): number {
  let len = s.length;
  if (len === 1) return 1;
  if (len === 0) return 0;

  let result = 0;
  const hash = new Map();

  for (let i = 0; i < len; i++) {
    const char = s[i];
    const prev = hash.get(char) ?? 0;

    hash.set(char, prev + 1);

    const current = hash.get(char);
    if (current % 2 === 0) result += 2;
  }

  return result !== len ? result + 1 : result;
}

console.log(longestPalindrome("abccccdd"));

export { longestPalindrome };
