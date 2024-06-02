function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

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

// const result = lengthOfLongestSubstring(" ");
// const result = lengthOfLongestSubstring("abcabcbb");
const result = lengthOfLongestSubstring("au");
// const result = lengthOfLongestSubstring("pwwkew");
// console.log(result, result === 0);
// console.log(result, result === 3);
// console.log(result, result === 3);
console.log(result, result === 2);
