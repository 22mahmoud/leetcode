function productExceptSelf(nums: number[]): number[] {
  let len = nums.length;
  let result: number[] = Array(len).fill(1);

  let x = 1;

  for (let i = 0; i < len; i++) {
    result[i] = x;
    x *= nums[i];
  }

  x = 1;
  for (let i = len - 1; i >= 0; i--) {
    let product = result[i] * x;
    result[i] = Object.is(-0, product) ? 0 : product;
    x *= nums[i];
  }

  return result;
}

export { productExceptSelf };
