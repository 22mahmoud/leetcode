function maxSubArray(nums: number[]): number {
  let result = 0;
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    result = Math.max(nums[i] + result, result);
  }

  return result;
}

export { maxSubArray };
