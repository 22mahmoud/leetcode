function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;

  hand.sort((a, b) => a - b);

  const counter: Record<number, number> = {};

  for (const card of hand) {
    counter[card] = (counter[card] || 0) + 1;
  }

  for (const card of hand) {
    if (counter[card] === 0) continue;

    for (let i = 0; i < groupSize; i++) {
      if (!counter[card + i]) return false;
      counter[card + i]--;
    }
  }

  return true;
}

export { isNStraightHand };
