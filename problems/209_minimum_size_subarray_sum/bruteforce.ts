function minSubArrayLen(target: number, nums: number[]): number {
  let answers: number[] = [];
  for (let x = 0; x < nums.length; x++) {
    let acc = 0;
    for (let y = x; y < nums.length; y++) {
      if (x === y) {
        acc = nums[x];
      } else {
        acc += nums[y];
      }

      if (acc >= target) {
        answers.push(Math.abs(y - x) + 1);
        break;
      }
    }
  }

  return answers.length ? Math.min(...answers) : 0;
}

export { minSubArrayLen };

