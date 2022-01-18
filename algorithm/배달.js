function solution(N, road, K) {
  const visited = Array.from({ length: N + 1 }, (_, index) => (!index ? 1 : 0));
  const distance = Array.from({ length: N + 1 }, () => Infinity);
  const baseTown = 1;
  const roadMap = makeTree(road, N);
  let current = [baseTown, 0];
  while (true) {
    const [currentTown, currentDistance] = current;
    const roads = roadMap[currentTown];
    visited[currentTown] = 1;
    roads.forEach(([targetTown, targetDistance]) => {
      if (
        currentDistance + targetDistance < distance[targetTown] &&
        !visited[targetTown]
      ) {
        distance[targetTown] = currentDistance + targetDistance;
      }
    });
    const nextTown = getMinDistanceTownFromNotVisited(distance, visited);
    if (nextTown) {
      current = [nextTown, distance[nextTown]];
    } else break;
  }
  return distance.filter((distance) => distance <= K).length + 1;
}

function makeTree(arrays, N) {
  const tree = Object.fromEntries(
    Array.from({ length: N }, (_, index) => [index + 1, []])
  );
  arrays.forEach(([a, b, c]) => {
    tree[a].push([b, c]);
    tree[b].push([a, c]);
  });
  return tree;
}

function getMinDistanceTownFromNotVisited(distances, visited) {
  let minDistance = Infinity;
  let town;
  let index = 0;
  for (const distance of distances) {
    if (!visited[index] && distance < minDistance) {
      town = index;
      minDistance = distance;
    }
    index++;
  }
  return town || null;
}
