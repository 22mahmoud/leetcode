function maxSubArray(nums: number[]): number {
  let result = 0;
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    result = Math.max(nums[i] + result, result);
     console.log(nums[i], result);
  }

  return result;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

export { maxSubArray };
