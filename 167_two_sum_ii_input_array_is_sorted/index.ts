function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (true) {
    const sum = numbers[left] + numbers[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
}

// const result = twoSum([2, 7, 11, 15], 9);
// const result = twoSum([2, 3, 4], 6);
const result = twoSum([0, 0, 3, 4], 0);
// console.log(result, JSON.stringify(result) === JSON.stringify([1, 2]));
// console.log(result, JSON.stringify(result) === JSON.stringify([1, 3]));
console.log(result, JSON.stringify(result) === JSON.stringify([1, 2]));
