function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let r = 0;
  let result = new Set();
  let len = 0;

  while (r < s.length) {
    if (!result.has(s[r])) {
      result.add(s[r]);
      len = Math.max(len, r - l + 1);
      r++;
    } else {
      result.delete(result.values().next().value);
      l++;
    }
  }

  return len;
}

export { lengthOfLongestSubstring };
