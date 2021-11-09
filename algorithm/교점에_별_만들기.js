function solution(line) {
  let [minX, maxX] = [Infinity, -Infinity];
  let [minY, maxY] = [Infinity, -Infinity];
  const intersectionPoints = _getIntersectionPoints(line);

  return _draw(intersectionPoints);

  function _getIntersectionPoints(line) {
    const intersectionPoints = {};
    for (let i = 0; i < line.length; i++) {
      for (let j = i + 1; j < line.length; j++) {
        const [A, B, E] = line[i];
        const [C, D, F] = line[j];
        const [x, y] = [
          (B * F - E * D) / (A * D - B * C),
          (E * C - A * F) / (A * D - B * C),
        ];
        if (A * D - B * C && Number.isInteger(x) && Number.isInteger(y)) {
          [minX, maxX] = [Math.min(minX, x), Math.max(maxX, x)];
          [minY, maxY] = [Math.min(minY, y), Math.max(maxY, y)];
          intersectionPoints[`${[x, y]}`] = true; //stringify
        }
      }
    }
    return intersectionPoints;
  }

  function _draw(intersectionPoints) {
    const drawStack = [];
    for (let i = maxY; i >= minY; i--) {
      let row = '';
      for (let j = minX; j <= maxX; j++) {
        const rowElement = intersectionPoints[`${j},${i}`] ? '*' : '.';
        row += rowElement;
      }
      drawStack.push(row);
    }
    return drawStack;
  }
}
