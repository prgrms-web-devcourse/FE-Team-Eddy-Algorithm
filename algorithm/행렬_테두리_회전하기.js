function solution(rows, columns, queries) {
  let matrix = new Array(rows).fill();
  matrix = matrix.map((_, index) =>
    Array.from({ length: columns }, (_, index2) => index * columns + index2 + 1)
  );

  return queries.map((query) =>
    _rotateAndFindLeastNumber(query.map((num) => num - 1))
  );

  /*
     ---------------
     |      1      |
     |             |
     |4           2|
     |             |
     |      3      |
     ---------------
     
  */

  function _rotateAndFindLeastNumber([y1, x1, y2, x2]) {
    let curr = [x1, y1];
    let currValue = matrix[y1][x1];
    let temp = currValue;
    let least = currValue;
    // 1
    while (curr[0] < x2) {
      const [currX, currY] = curr;
      currValue = matrix[currY][currX + 1];
      least = Math.min(least, currValue);
      matrix[currY][currX + 1] = temp;
      temp = currValue;
      curr = [currX + 1, currY];
    }
    // 2
    while (curr[1] < y2) {
      const [currX, currY] = curr;
      currValue = matrix[currY + 1][currX];
      least = Math.min(least, currValue);
      matrix[currY + 1][currX] = temp;
      temp = currValue;
      curr = [currX, currY + 1];
    }
    // 3
    while (curr[0] > x1) {
      const [currX, currY] = curr;
      currValue = matrix[currY][currX - 1];
      least = Math.min(least, currValue);
      matrix[currY][currX - 1] = temp;
      temp = currValue;
      curr = [currX - 1, currY];
    }
    // 4
    while (curr[1] > y1) {
      const [currX, currY] = curr;
      currValue = matrix[currY - 1][currX];
      least = Math.min(least, currValue);
      matrix[currY - 1][currX] = temp;
      temp = currValue;
      curr = [currX, currY - 1];
    }
    return least;
  }
}
