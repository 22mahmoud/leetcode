function twoSum(numbers: number[], target: number): number[] {
  let result: number[] = [];

  for (let x = 0; x < numbers.length; x++) {
    for (let y = x + 1; y < numbers.length; y++) {
      if (numbers[x] + numbers[y] === target) {
        result = [x + 1, y + 1];
        break;
      }
    }
  }

  return result;
}

export { twoSum };
