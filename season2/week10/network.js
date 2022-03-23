class Queue {
  constructor(iter = []) {
    this.array = [...iter];
    this.head = 0;
    this.length = this.array.length;
  }

  enqueue(item) {
    this.array.push(item);
    this.length++;
  }

  dequeue() {
    this.length--;

    return this.array[this.head++];
  }
}

function bfs(a, b, computers, rowLen, columnLen) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const directionLen = dx.length;
  const queue = new Queue();
  queue.enqueue([a, b]);
  computers[a][b] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < directionLen; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const inRowrange = 0 <= nx && nx < rowLen;
      const inColumnrange = 0 <= nx && nx < columnLen;
      if (inRowrange && inColumnrange && computers[nx][ny] === 1) {
        queue.enqueue([nx, ny]);
        computers[nx][ny] = 0;
      }
    }
  }
}

function solution(n, computers) {
  const computersLen = computers[0].length;

  let networkNum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < computersLen; j++) {
      if (computers[i][j] === 1) {
        bfs(i, j, computers, n, computersLen);
        networkNum += 1;
      }
    }
  }
  return networkNum;
}
