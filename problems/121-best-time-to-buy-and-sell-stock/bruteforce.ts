function maxProfit(prices: number[]): number {
  let diff = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      diff = Math.max(prices[j] - prices[i], diff);
    }
  }

  return diff < 0 ? 0 : diff;
}

export { maxProfit };
