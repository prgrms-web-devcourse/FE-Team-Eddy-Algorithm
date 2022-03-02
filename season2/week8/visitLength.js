function solution(dirs) {
  const direction = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const maxNumber = 5;
  const minNumber = -5;
  let currentPosition = [0, 0];
  const positions = new Set();

  for (const dir of dirs) {
    const [x, y] = direction[dir];
    const [currentX, currentY] = currentPosition;
    const nextX = currentX + x;
    const nextY = currentY + y;
    if (
      nextX > maxNumber ||
      nextX < minNumber ||
      nextY > maxNumber ||
      nextY < minNumber
    ) {
      continue;
    }

    currentPosition = [currentX + x, currentY + y];

    const [currentXposition, currentYposition] = currentPosition;

    const maxX = Math.max(currentXposition, currentX);
    const minX = Math.min(currentXposition, currentX);
    const maxY = Math.max(currentYposition, currentY);
    const minY = Math.min(currentYposition, currentY);

    positions.add(`${maxX}${maxY}${minX}${minY}`);
  }

  return positions.size;
}
