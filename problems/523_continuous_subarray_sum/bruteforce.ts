function checkSubarraySum(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    let current = 0;
    for (let j = i; j < nums.length; j++) {
      current += nums[j];
      if (j > i && current % k === 0) return true;
    }
  }

  return false;
}

export { checkSubarraySum };
