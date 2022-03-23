const DFS = (graph, startNode, target) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작
  let count = 0;
  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.

    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      if (target === node) {
        return count;
      }
      count++;
      visited.push(node);

      needVisit = [...graph[node], ...needVisit];
    }
  }
  return 0;
};
function solution(begin, target, words) {
  if (words.indexOf(target) === -1) return 0;
  var answer = 0;
  const graph = {};

  words.splice(words.indexOf(target), 1);
  words.unshift(target);
  words.push(begin);
  words.map((val1) => {
    words.map((val2) => {
      if (val1 !== val2) {
        const length = val1.split("").length;
        for (let i = 0; i < length; i++) {
          const str1 = val1.slice(0, i).concat(val1.slice(i + 1, length));
          const str2 = val2.slice(0, i).concat(val2.slice(i + 1, length));
          if (str2.indexOf(str1) > -1) {
            if (graph[val1]) graph[val1].push(val2);
            else graph[val1] = [val2];
          }
        }
      }
    });
  });
  return DFS(graph, begin, target);
}
