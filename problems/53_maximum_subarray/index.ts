function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(current, max);
  }

  return max;
}

export { maxSubArray };
