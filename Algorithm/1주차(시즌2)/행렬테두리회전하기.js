const changeArr = (cycleArr, twoDemArr) => {
  const [firstRow, firstColumn, lastRow, lastColumn] = [
    cycleArr[0] - 1,
    cycleArr[1] - 1,
    cycleArr[2] - 1,
    cycleArr[3] - 1,
  ];
  const columnChange = lastColumn - firstColumn;
  const rowChange = lastRow - firstRow;
  let min = Infinity;
  let saveVal = twoDemArr[firstRow][firstColumn],
    swap;

  //4번의 회전
  for (let column = 0; column < columnChange; column++) {
    swap = twoDemArr[firstRow][firstColumn + column + 1];
    min = Math.min(min, swap);
    twoDemArr[firstRow][firstColumn + column + 1] = saveVal;
    saveVal = swap;
  }
  for (let row = 0; row < rowChange; row++) {
    swap = twoDemArr[firstRow + row + 1][lastColumn];
    min = Math.min(min, swap);
    twoDemArr[firstRow + row + 1][lastColumn] = saveVal;
    saveVal = swap;
  }
  for (let column = columnChange; column > 0; column--) {
    swap = twoDemArr[lastRow][firstColumn + column - 1];
    min = Math.min(min, swap);
    twoDemArr[lastRow][firstColumn + column - 1] = saveVal;
    saveVal = swap;
  }
  for (let row = rowChange; row > 0; row--) {
    swap = twoDemArr[firstRow + row - 1][firstColumn];
    min = Math.min(min, swap);
    twoDemArr[firstRow + row - 1][firstColumn] = saveVal;
    saveVal = swap;
  }
  return min;
};

function solution(rows, columns, queries) {
  let countVal = 1;
  const twoDemArr = Array.from(Array(rows), () =>
    Array(columns)
      .fill(0)
      .map(() => countVal++)
  );
  return queries.map((cycleArr) => changeArr(cycleArr, twoDemArr));
}
