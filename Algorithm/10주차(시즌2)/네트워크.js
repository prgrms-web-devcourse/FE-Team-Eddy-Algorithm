//16분 소요
const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

function solution(n, computers) {
  var answer = 0;
  const graph = {};
  computers.map((computer, x) => {
    computer.map((val, y) => {
      if (x !== y && val === 1) {
        if (graph[x + 1]) graph[x + 1].push(y + 1);
        else graph[x + 1] = [y + 1];
      }
    });
  });
  const duplicateArr = [];
  Object.entries(graph).map(([key, value]) => {
    duplicateArr.push(
      JSON.stringify(DFS(graph, Number(key)).sort((a, b) => a - b))
    );
  });

  const newSet = [...new Set(duplicateArr)];
  const connectCount = Object.entries(graph).length;
  // 영역끼리 묶여있는 갯수 + 전체에서 graph가 연결이 하나라도 존재하는 값들을 뺀 값(독립된 네트워크)
  return newSet.length + n - connectCount;
}
