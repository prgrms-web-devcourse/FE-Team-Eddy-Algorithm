function solution(k, dungeons) {
  const stack = [[k, 0]]; // [[currentValue, visited(bit)],...]
  let maxCount = 0;
  while (stack.length) {
    const [currValue, visited] = stack.pop();

    dungeons.forEach(([minValue, decreaseValue], idx) => {
      if (currValue < minValue || visited & (2 ** idx)) {
        const count = _countOneInBit(visited);
        maxCount = Math.max(maxCount, count);

        return;
      }

      stack.push([currValue - decreaseValue, visited + 2 ** idx]);
    });
  }
  return maxCount;

  function _countOneInBit(num) {
    return num
      .toString(2)
      .split("")
      .reduce((acc, num) => (num === "1" ? acc + 1 : acc), 0);
  }
}
