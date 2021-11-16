function solution(k, dungeons) {
  const stack = [[k, {}]]; // [[currentValue, visited{}],...]
  let maxCount = 0;
  while (stack.length) {
    const [currValue, initialVisited] = stack.pop();

    dungeons.forEach(([minValue, decreaseValue], idx) => {
      const visited = { ...initialVisited }; // 객체 복사
      if (currValue < minValue || visited[idx]) {
        maxCount = Math.max(maxCount, Object.keys(visited).length);

        return;
      }

      visited[idx] = true;
      stack.push([currValue - decreaseValue, visited]);
    });
  }
  return maxCount;
}
