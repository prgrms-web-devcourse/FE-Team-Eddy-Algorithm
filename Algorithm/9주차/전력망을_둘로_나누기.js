class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    return Boolean(this.nodes[node]);
  }

  removeNode(node) {
    if (this.contains(node)) {
      delete this.nodes[node];
    }
  }

  hasEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (
        this.nodes[fromNode].includes(toNode) &&
        this.nodes[toNode].includes(fromNode)
      )
        return true;
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    if (this.contains(fromNode) && this.contains(toNode)) {
      if (this.hasEdge(fromNode, toNode)) {
        const toInFromIdx = this.nodes[fromNode].indexOf(toNode);
        const fromInToIdx = this.nodes[toNode].indexOf(fromNode);
        this.nodes[fromNode].splice(toInFromIdx, 1);
        this.nodes[toNode].splice(fromInToIdx, 1);
      }
    }
  }
}

const bfs = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
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
  let minDiff = Infinity;
  const graph = new Graph();
  for(let i=1;i<=n;i++){
    graph.addNode(i)
  }

  wires.map(([from,to])=>{
    graph.addEdge(from,to)
  })

  wires.map(([from,to])=>{
    graph.removeEdge(from,to)
    minDiff = Math.min(minDiff,Math.abs(n-2*bfs(graph.nodes,1).length))
    graph.addEdge(from,to)
  })

  return minDiff;
}
