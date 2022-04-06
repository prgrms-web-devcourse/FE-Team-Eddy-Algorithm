const BFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};
function solution(n, wires) {
  let min = Infinity;
  for (let i = 0; i < wires.length; i++) {
    const newWires = [...wires];
    newWires.splice(i, 1);
    const graph = {};
    for (let i = 0; i < n; i++) {
      graph[i + 1] = [];
    }
    // console.log(graph)
    newWires.map((wire) => {
      const [start, end] = [wire[0], wire[1]];
      graph[end].push(start);
      graph[start].push(end);
    });
    let a = BFS(graph, 1).length;
    let b = n - a;
    min = Math.min(min, Math.abs(a - b));
  }
  return min;
}
