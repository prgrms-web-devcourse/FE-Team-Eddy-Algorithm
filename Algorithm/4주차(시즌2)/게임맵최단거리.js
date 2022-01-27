function solution(maps) {
  // 방문을 체크하는 visited와 방문 할 위치를 queue로 파악
  const visited = [0];
  let queue = [[0, 0]];

  while (queue.length) {
    const [row, column] = queue.shift();
    const cur = row * maps[0].length + column;
    // 상하좌우에 대한 이동이 가능체크
    if (maps[row][column + 1] === 1 && !visited[cur + 1]) {
      visited[cur + 1] = visited[cur] + 1;
      queue.push([row, column + 1]);
    }
    if (maps[row][column - 1] === 1 && !visited[cur - 1]) {
      visited[cur - 1] = visited[cur] + 1;
      queue.push([row, column - 1]);
    }
    //행은 영역을 넘어가는 부분에 대한 체크를 미리  : maps[undefined][column]으로 접근은 에러 발생
    if (maps[row - 1] !== undefined) {
      if (maps[row - 1][column] === 1 && !visited[cur - maps[0].length]) {
        visited[cur - maps[0].length] = visited[cur] + 1;   
        queue.push([row - 1, column]);
      }
    }
    if (maps[row + 1] !== undefined) {
      if (maps[row + 1][column] === 1 && !visited[cur + maps[0].length]) {
        visited[cur + maps[0].length] = visited[cur] + 1;   
        queue.push([row + 1, column]);
      }
    }
  }

  //마지막 값이 어떠한 값이 존재한다면 접근에 성공 / 값이 없다면 도달 실패
  return visited[maps[0].length * maps.length - 1] === undefined
    ? -1
    : visited[visited.length - 1] + 1;
}


// visited[cur - maps[0].length] = visited[cur] + 1; 는 visited[(row - 1) * maps[0].length + column]와 같다. 