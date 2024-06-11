const getValidNeighbours =
  ({ cols, rows }: { rows: number; cols: number }) =>
  ([r, c]: number[]) => {
    return r >= 0 && r < rows && c >= 0 && c < cols;
  };

function exist(board: string[][], word: string): boolean {
  const cols = board[0].length;
  const rows = board.length;

  if (cols === 1 && rows === 1 && board[0][0] === word) return true;

  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));

  const validNeighbours = getValidNeighbours({ cols, rows });

  function walk(r: number, c: number, subword: string): boolean {
    if (subword.length === word.length) return subword === word;
    if (board[r][c] !== word[subword.length] || visited[r][c]) return false;

    visited[r][c] = true;
    subword += board[r][c];

    const neighbours = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ].filter(validNeighbours);

    for (const [x, y] of neighbours) {
      if (walk(x, y, subword)) return true;
    }

    visited[r][c] = false;
    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (walk(i, j, '')) return true;
    }
  }

  return false;
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE',
  ),
);

export { exist };
