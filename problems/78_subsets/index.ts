function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const subset: number[] = [];

  function backtrack(i: number = 0) {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtrack(i + 1);

    subset.pop();
    backtrack(i + 1);
  }

  backtrack();

  return result;
}

export { subsets };
