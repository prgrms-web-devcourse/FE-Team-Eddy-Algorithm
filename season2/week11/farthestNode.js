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

function solution(n, edge) {
  const nodes = {};
  edge.forEach(([from, to]) => {
    if (!nodes[from]) {
      nodes[from] = [];
    }

    if (!nodes[to]) {
      nodes[to] = [];
    }
    nodes[from].push(to);
    nodes[to] !== from && nodes[to].push(from);
  });

  const visited = Array.from(
    { length: Object.keys(nodes).length },
    () => false
  );

  const distances = {};
  Object.keys(nodes).forEach((node) => (distances[node] = 0));

  const queue = new Queue();
  const targetIdx = 1;
  queue.enqueue(targetIdx);

  while (queue.length > 0) {
    const poppedKey = queue.dequeue();
    visited[poppedKey - 1] = true;
    nodes[poppedKey].forEach((node) => {
      if (!visited[node - 1]) {
        queue.enqueue(node);
        visited[node - 1] = true;
        distances[node] += 1;
        distances[node] += distances[poppedKey];
      }
    });
  }

  const maxDistance = Math.max(...Object.values(distances));
  const farNodes = Object.values(distances).reduce((acc, distance) => {
    if (distance === maxDistance) {
      acc += 1;
    }
    return acc;
  });

  return farNodes;
}
