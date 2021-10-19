/**
 * 떠올린 알고리즘은 BFS입니다.
 * 간선 중에 하나 제거하고 둘로 나눠진 송전탑영역 각각을 BFS로 탐색하여 구해진 송전탑 개수 a, b를 구합니다.
 * a - b 를 연산하여 송전탑의 차이를 구하여 배열에 저장합니다.
 * 이 과정에서 간선을 제거한 하나의 루프가 끝나면 다음 루프에서 다시 이전에 제거한 간선은 다시 추가합니다.
 * 모든 간선을 제거하였으면 종료합니다.
 * 송전탑의 차이를 구한 배열에서 최소값을 구하여 리턴합니다.
 **/

 const bfs = (startNode, graph) => {
    let visited = [];
    let unvisited = [];

    unvisited.push(startNode);

    while (unvisited.length !== 0) {
        const currentNode = unvisited.shift();
        if (!visited.includes(currentNode)) {
            visited.push(currentNode);
            unvisited = [
                ...unvisited,
                graph[currentNode]
            ];
        }
    }
    return visited;
}

const solution = (n, wires) => {
    const graph = {};

    for (const wire of wires) {
        const [from , to] = wire;
        graph[from] ? graph[from].push(to) : graph[from] = [to];
    }

    console.log(graph);
    
    for (const wire of wires) {
        const [from , to] = wire;
        console.log(bfs(from, graph));
    }
    
    return 0;
}
