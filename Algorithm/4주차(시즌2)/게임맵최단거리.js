/*
채점 결과
정확성: 27.1
효율성: 22.6
합계: 49.6 / 100.0
*/
function solution(maps) {
  let site = [0, 0];
  const visited = [0];
  //방문 할 수 있는 곳들의 모임
  let queue = [[0, 0]];

  while (queue.length) {
    const [row, column] = queue.shift();
    if (
      maps[row][column + 1] === 1 &&
      !visited[row * maps.length + column + 1]
    ) {
      visited[row * maps.length + column + 1] =
        visited[row * maps.length + column] + 1;
      queue.push([row, column + 1]);
    }
    if (
      maps[row][column - 1] === 1 &&
      !visited[row * maps.length + column - 1]
    ) {
      visited[row * maps.length + column - 1] =
        visited[row * maps.length + column] + 1;
      queue.push([row, column - 1]);
    }
    if (maps[row - 1] !== undefined && maps[row - 1][column] === 1) {
      if (!visited[(row - 1) * maps.length + column]) {
        visited[(row - 1) * maps.length + column] =
          visited[row * maps.length + column] + 1;
        queue.push([row - 1, column]);
      }
    }
    if (maps[row + 1] !== undefined && maps[row + 1][column] === 1) {
      if (!visited[(row + 1) * maps.length + column]) {
        visited[(row + 1) * maps.length + column] =
          visited[row * maps.length + column] + 1;
        queue.push([row + 1, column]);
      }
    }
  }
  return visited[maps[0].length * maps.length - 1] === undefined
    ? -1
    : visited[visited.length - 1] + 1;
}
