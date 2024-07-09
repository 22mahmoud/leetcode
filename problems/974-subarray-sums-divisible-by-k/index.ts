function subarraysDivByK(nums: number[], k: number): number {
  let result = 0;
  let prefix = 0;
  const hash: Record<number, number> = { 0: 1 };

  for (const x of nums) {
    prefix += x;
    const r = ((prefix % k) + k) % k;

    const y = hash[r] ?? 0;
    result += y;
    hash[r] = y + 1;
  }

  return result;
}

export { subarraysDivByK };
