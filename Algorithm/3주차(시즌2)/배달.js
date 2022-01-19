function solution(N, road, K) {
  // 2차원 배열값으로 가중치 설정
  const graph = Array.from(Array(N), () => Array(N).fill(Infinity));

  // 중복되는 값에 대해서는 Math.min으로 최소 길이로 설정
  road.map(([f, s, t]) => {
    graph[f - 1][s - 1] = Math.min(graph[f - 1][s - 1], t);
    graph[s - 1][f - 1] = Math.min(graph[s - 1][f - 1], t);
  });

  // 첫방문은 0번째부터 시작
  let visited = [0];
  let queue = [0];

  while (queue.length) {
    const cur = queue.shift();
    graph[0].map((_, idx) => {
      // 방문하지 않은 idx 위치이면서 Infinite가 아니라면 실행
      if (visited[idx] === undefined && isFinite(graph[cur][idx])) {
        // 현재값에서 다음값까지 덧셈
        visited[idx] = visited[cur] + graph[cur][idx];
        queue.push(idx);
      }
      // 방문한 곳이라면 이전 방문값과 현재 방문값의 최소를 비교하여 값 갱신
      if (visited[idx] !== undefined) {
        visited[idx] = Math.min(visited[idx], visited[cur] + graph[cur][idx]);
      }
    });
  }
  return visited.filter((val) => val <= K).length;
}



//선협 강사님에게 질문하여 답변으로 양방향을 고려한 코드
function dijkstra(road, N) {
    const heap = [] // 우선순위 큐(힙)
    heap.push({ node: 1, cost: 0 }) // 1번 마을부터 시작

    const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
    dist[1] = 0; // 1번 마을은 무조건 거리가 0

    while (!(heap.length === 0) ) { // heap이 비어있지 않다면
        // cost가 가장 낮은 정점을 뽑는다.
        const { node: current, cost: currentCost } = heap.shift();

        for (const [src, dest, cost] of road) { // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
            const nextCost = cost + currentCost; // 비용

            // 양방향을 고려하여 작성
            if (src === current && nextCost < dist[dest]) {
                // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
                dist[dest] = nextCost; // 거리를 갱신한다.
                heap.push({ node: dest, cost: nextCost }); // push
            } else if (dest == current && nextCost < dist[src]) {
                // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
                dist[src] = nextCost; // 거리를 갱신한다.
                heap.push({ node: src, cost: nextCost }); // push
            }
        }
    }

    return dist; // 1번 마을부터 각 마을까지의 최단 거리
}


function solution(N, road, K) {
    const dist = dijkstra(road, N);
    return dist.filter(x => x <= K).length;
}

