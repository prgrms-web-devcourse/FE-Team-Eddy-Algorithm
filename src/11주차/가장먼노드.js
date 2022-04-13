function solution(n, edge) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => []);
  const distance = new Array(n + 1).fill(0);
  
  for (const [start, dest] of edge) {
      graph[start].push(dest);
      graph[dest].push(start);
  }
  
  const queue = [1];
  distance[1] = 1;
  
  while (queue.length) {
      const start = queue.shift();
      
      for (const dest of graph[start]) {
          if (!distance[dest]) {
              queue.push(dest);
              distance[dest] = distance[start] + 1;
          }
      }
  }
  
  const max = Math.max(...distance);
  answer = distance.filter((dist) => dist === max).length;

  return answer;
}
