function productExceptSelf(nums: number[]): number[] {
  let result: number[] = Array(nums.length).fill(1);

  let n = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= i == 0 ? 1 : nums[i - 1] * n;
    n *= result[i] * nums[i];
  }

  n = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= i == nums.length - 1 ? 1 : nums[i + 1] * n;
    n *= result[i] * nums[i];
  }

  return result;
}

productExceptSelf([1, 2, 3, 4]);

export { productExceptSelf };
