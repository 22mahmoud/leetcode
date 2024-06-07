// isPossibleDivide
function isNStraightHand(hand: number[], gs: number): boolean {
  if (hand.length % gs !== 0) return false;
  hand.sort((a, b) => a - b);

  let result: number[][] = [[]];
  let stack: number[] = [];
  let idx = 0;
  let j = 0;

  while (hand.length > 0) {
    if (result[idx]?.length === gs) {
      idx++;
      result[idx] = [];
      j = 0;
      hand = [...stack, ...hand];
      stack = [];
    }

    const prev = result[idx][j - 1];

    const current = hand.shift()!;
    if (prev === undefined || prev + 1 === current) {
      result[idx].push(current);
      j++;
    } else {
      stack.push(current);
    }
  }

  return !stack.length && result.every((x) => x.length === gs);
}

console.log(isNStraightHand([1, 1, 3, 6, 2, 3, 4, 7, 8], 3));
// isNStraightHand([2, 1, 2, 4, 1, 3, 3, 3], 2);
// isNStraightHand([8, 10, 12], 4);

export { isNStraightHand };
