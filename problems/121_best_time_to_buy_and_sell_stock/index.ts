function maxProfit(prices: number[]): number {
  let l = 0;
  let r = 1;
  let diff = -Infinity;

  while (r < prices.length) {
    const x = prices[l];
    const y = prices[r];

    if (y < x) {
      l = r;
    } else {
      diff = Math.max(y - x, diff);
    }

    r++;
  }

  return diff < 0 ? 0 : diff;
}

export { maxProfit };
