function productExceptSelf(nums: number[]): number[] {
  let result: number[] = Array.from({ length: nums.length }).map((_) => 1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        result[i] *= nums[j];
      }
    }
  }

  return result.map((x) => (Object.is(-0, x) ? 0 : x));
}

export { productExceptSelf };

