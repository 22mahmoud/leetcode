// import { large } from "./large";

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

const result = minSubArrayLen(11, [1, 2, 3, 4, 5]);
// const result = minSubArrayLen(4, [1, 4, 4]);
// const result = minSubArrayLen(396893380, large);

console.log(result, result === 3);
// console.log(result, result === 1);
// console.log(result, result === 79517);
