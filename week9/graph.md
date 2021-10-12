## 전력망을 둘로 나누기

### 문제 풀이 방법
wires 속 wire를 하나씩 제외하면서 나머지 wire들에 대해 BFS를 실시한다.<br>
첫 번째 wire의 첫 번째 송전탑부터 시작해서 더 이상 연결된 송전탑이 없을 때까지 BFS를 하고
총 연결된 송전탑의 개수를 구한다.<br>
전체 송전탑의 개수에서 위에서 구한 개수를 빼면 다른 그룹의 송전탑 개수가 나온다.<br>
두 그룹의 차를 반환한다.<br>

#### 시도하던 것,,,
```jsx
function solution(n, wires) {
    wires.forEach((_, idx) => {
        const newWires = wires.slice();
        newWires.splice(idx, 1);
        
        const graph = {};
        newWires.forEach(([first, second]) => {
            graph[first] ? graph[first].push(second) : graph[first] = [second];
        })
        
        traversal(graph);
    })
}

function traversal(graph) {
    const keys = Object.keys(graph);
    const queue = [keys.shift()];
    let count = 0;
    while(queue.length !== 0) {
        const start = queue.shift();
        count++;
        graph[start] ? queue.push(...graph[start]): null;
        //queue.push(graph[start]);
        console.log(queue);
    }
    //console.log(count);
}
```
