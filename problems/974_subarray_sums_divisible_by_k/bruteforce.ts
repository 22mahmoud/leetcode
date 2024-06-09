function subarraysDivByK(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = 0;
    for (let j = i; j < nums.length; j++) {
      current += nums[j];
      if (current % k === 0) count++;
    }
  }

  return count;
}

export { subarraysDivByK };
