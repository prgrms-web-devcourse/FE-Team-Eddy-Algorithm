function solution(n, wires) {
  const towersConnection = wires.reduce((towersConnection, [v1, v2]) => {
    towersConnection[v1] 
      ? towersConnection[v1][v2] = true 
      : towersConnection[v1] = { [v2] : true };
    towersConnection[v2] 
      ? towersConnection[v2][v1] = true 
      : towersConnection[v2] = { [v1] : true };
    return towersConnection;
  }, {});

  let leastDifference = Infinity;
  
  wires.forEach(([v1, v2]) => {
    const visited = { [v1] : true, [v2] : true };
    const networkLength = getNetworkLength ([v1], towersConnection, visited);
     // Network A : networkLength , Network B : n - networkLength
    leastDifference = Math.min(leastDifference, Math.abs(n - 2 * networkLength)); 
  });
  return leastDifference;
  
    
    
  function getNetworkLength (stack, towersConnection, visited) {
    let networkLength = 0;
    while (stack.length > 0) {
      const currTower = stack.pop();
      networkLength ++;
      Object
        .keys(towersConnection[currTower])
        .forEach(nextTower => {
          if (towersConnection[currTower][nextTower] && !(nextTower in visited)) {
            stack.push(nextTower);
            visited[nextTower] = true;
          }
        });
    }
    return networkLength;
  }
}