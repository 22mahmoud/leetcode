function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let current = 0;

  for (const x of nums) {
    current = Math.max(x, current + x);
    max = Math.max(current, max);
  }

  return max;
}

export { maxSubArray };
