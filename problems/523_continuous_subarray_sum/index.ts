function checkSubarraySum(nums: number[], k: number): boolean {
  const map = new Set();
  let sum = 0;

  for (const x of nums) {
    const prev = sum;

    sum = (sum + x) % k;

    if (map.has(sum)) return true;

    map.add(prev);
  }

  return false;
}

checkSubarraySum([23, 2, 4, 6, 7], 6);

export { checkSubarraySum };
