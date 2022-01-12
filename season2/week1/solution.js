const makeMatrix = (matrix, rows, columns) => {
  let num = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = num;
      num += 1;
    }
  }
};

const getSides = (matrix, query) => {
  const [minRow, minColumn, maxRow, maxColumn] = query.map(
    (queryElement) => queryElement - 1
  );

  const sides = [];
  for (let i = minRow; i < maxRow + 1; i++) {
    for (let j = minColumn; j < maxColumn + 1; j++) {
      if (i === minRow || i === maxRow) {
        sides.push(matrix[i][j]);
      } else if (j === minColumn || j === maxColumn) {
        sides.push(matrix[i][j]);
      } else {
        sides.push(0);
      }
    }
  }

  return sides;
};

const rotateSides = (sides, query) => {
  const startRow = query[0];
  const [minRow, minColumn, maxRow, maxColumn] = query.map(
    (queryElement) => queryElement - startRow
  );

  let newSides = Array.from(Array(maxRow + 1), () =>
    Array(maxColumn + 1).fill(null)
  );
  let k = 0;

  for (let i = 0; i < maxRow + 1; i++) {
    for (let j = 0; j < maxColumn + 1; j++) {
      newSides[i][j] = sides[k];

      k += 1;
    }
  }

  const overflows = [];

  overflows.push(newSides[maxRow][0]);

  //Todo : j를 i로 바꾸기
  //Todo : 사이드의 아래쪽을 왼쪽으로 한 칸씩 이동하는 코드를 함수화하기
  for (let j = 0; j < maxColumn + 1; j++) {
    if (j === maxColumn) {
      newSides[maxRow][j] = null;
      break;
    }
    newSides[maxRow][j] = newSides[maxRow][j + 1];
  }

  overflows.push(newSides[0][maxColumn]);

  //Todo : 사이드의 위쪽을 오른쪽으로 한 칸씩 이동하는 코드를 함수화하기
  for (let j = maxColumn; j >= 0; j--) {
    if (j === 0) {
      newSides[0][j] = null;
      break;
    }
    newSides[0][j] = newSides[0][j - 1];
  }

  //Todo : 사이드의 왼쪽을 한 칸씩위로 올리기
  //     for (let j = 0; j < maxRow + 1; j++) {
  //             if (j === maxRow) {

  //                 newSides[j][0] = null;
  //                 break;
  //             }
  //             newSides[j][0] = newSides[j + 1][0];
  //     }

  //Todo : 사이드의 오른쪽을 한 칸씩 아래로 내리기
};

const solution = (rows, columns, queries) => {
  let answer = [];
  let matrix = Array.from(Array(rows), () => Array(columns).fill(null));

  makeMatrix(matrix, rows, columns);

  const result = [];
  const queriesLength = queries.length;
  for (let i = 0; i < 1; i++) {
    const sides = getSides(matrix, queries[i]);

    result.push(Math.min(...sides));

    if (i === queriesLength - 1) {
      break;
    }

    rotateSides(sides, queries[i]);

    //Todo : 실제 matrix를 sides에서 회전한대로 바꾸기
  }

  return answer;
};
