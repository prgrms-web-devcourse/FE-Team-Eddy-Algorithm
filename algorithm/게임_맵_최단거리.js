class Queue {
  constructor(iter) {
    this.array = [...iter];
    this.left = 0;
    this.length = this.array.length - this.left;
  }

  enqueue(item) {
    this.array.push(item);
    this.length++;
  }
  dequeue() {
    if (!this.length) {
      throw new Error("there is no item!");
    }
    this.left++;
    this.length--;
    return this.array[this.left - 1];
  }
}

function solution(maps) {
  let startPosition = [0, 0];
  let endPosition = [maps.length - 1, maps[0].length - 1];
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = { "0x0": true };
  const queue = new Queue([[startPosition, 1]]);

  while (queue.length) {
    const [[currX, currY], moveCount] = queue.dequeue();
    const newPositions = directions
      .map(([dirX, dirY]) => [dirX + currX, dirY + currY])
      .filter(
        ([newX, newY]) =>
          !visited[`${newX}x${newY}`] && isPositionAvailable(newX, newY, maps)
      );
    for (const newPosition of newPositions) {
      if (
        newPosition[0] === endPosition[0] &&
        newPosition[1] === endPosition[1]
      ) {
        return moveCount + 1;
      }
      visited[`${newPosition[0]}x${newPosition[1]}`] = true;
      queue.enqueue([newPosition, moveCount + 1]);
    }
  }

  return -1;

  function isPositionAvailable(posX, posY, maps) {
    return (
      0 <= posX &&
      0 <= posY &&
      posX <= maps.length - 1 &&
      posY <= maps[0].length - 1 &&
      maps[posX][posY]
    );
  }
}

console.log(solution([[1, 1]]));
