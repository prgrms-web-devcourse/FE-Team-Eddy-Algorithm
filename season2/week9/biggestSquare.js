function solution(board) {
  const rowLength = board.length;
  const columnLength = board[0].length;

  const calculated = Array.from({ length: columnLength }, () =>
    Array.from({ length: rowLength }, () => 0)
  );

  for (let i = 0; i < rowLength; i++) {
    calculated[i] = board[i];
  }

  for (let i = 0; i < rowLength - 1; i++) {
    for (let j = 0; j < columnLength - 1; j++) {
      calculated[i + 1][j + 1] =
        Math.min(board[i][j], board[i + 1][j], board[i][j + 1]) + 1;
    }
  }

  const pow = 2;
  return Math.pow(Math.max(...calculated.flat()), pow);
}
