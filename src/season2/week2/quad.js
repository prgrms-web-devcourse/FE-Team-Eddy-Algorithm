function zipQuad(arr, sideLength, a, b, result) {
  if (sideLength === 1) {
    const zipNumber = arr[a][b];
    result[zipNumber]++;
    return;
  }

  let isAllEqual = true;
  let firstValue = arr[a][b];
  for (let i = a; i < a + sideLength; i++) {
    for (let j = b; j < b + sideLength; j++) {
      if (firstValue !== arr[i][j]) {
        isAllEqual = false;
        break;
      }
    }
  }

  if (isAllEqual === true) {
    const zipNumber = arr[a][b];
    result[zipNumber]++;
    return;
  }

  zipQuad(arr, sideLength / 2, a, b, result);
  zipQuad(arr, sideLength / 2, a, b + sideLength / 2, result);
  zipQuad(arr, sideLength / 2, a + sideLength / 2, b, result);
  zipQuad(arr, sideLength / 2, a + sideLength / 2, b + sideLength / 2, result);
}

function solution(arr) {
  const sideLength = arr.length;
  const result = [0, 0];
  zipQuad(arr, sideLength, 0, 0, result);

  return result;
}
