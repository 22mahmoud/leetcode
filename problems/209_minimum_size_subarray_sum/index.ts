function minSubArrayLen(target: number = 0, nums: number[]): number {
  let left = 0;
  let total = 0;
  let result = Infinity;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right];

    while (total >= target) {
      result = Math.min(result, right - left + 1);
      total -= nums[left];
      left++;
    }
  }

  return result === Infinity ? 0 : result;
}

export { minSubArrayLen };

