function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(open = 0, close = 0, current = '') {
    if (open === close && close === n) {
      return result.push(current);
    }

    if (open < n) {
      backtrack(open + 1, close, current + '(');
    }

    if (close < open) {
      backtrack(open, close + 1, current + ')');
    }
  }

  backtrack();

  return result;
}

export { generateParenthesis };
