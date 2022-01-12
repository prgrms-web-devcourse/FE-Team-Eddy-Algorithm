class Queue {
  constructor(array = []) {
    this.array = array;
    this.head = 0;
    this.tail = array.length - 1;
    this.length = array.length;  
  }
  
  dequeue(){
    if (this.head > this.tail) {
      return undefined;
    }
    this.length--;
    
    return this.array[this.head++];
  }
  
  enqueue(value){
    this.array.push(value);
    this.tail++;
    this.length++;
  }
  
  peek() {
    return this.array[this.head];
  }
    
}

function solution(places) {
  const result = [];
  const directions = [[1, 0], [- 1, 0], [0, 1], [0, - 1]];
    
  for (const place of places) {
    const personPositions = _getPersonPositions(place);
    let isPush1 = true;
        
    for (const personPosition of personPositions) {
      if (_getIsTooClose(place, personPosition)) {
        result.push(0);
        isPush1 = false;
        break;
      }
    }
    isPush1 && result.push(1);
  }
    
  return result;
    
    
    
  function _getPersonPositions (place) {
    const personPositions = [];
    place.forEach((column, y) => {
      const columnArray = column.split('');
      columnArray.forEach((element, x) => {
        if (element === 'P') {
          personPositions.push([x, y]);
        }
      });
    });
        
    return personPositions;
  }
    
    
  function _getIsTooClose (place, personPosition) {
    const queue = new Queue([[personPosition, 0]]);
    let isTooClose = null;
    const visited = { [`${personPosition[0]},${personPosition[1]}`]: true };

    outer: while (queue.length) {
      const [currPosition, distance] = queue.dequeue();
            
      for (const [directionX, directionY] of directions) {
        const [x, y] = currPosition;
        const [newX, newY] = [x + directionX, y + directionY];
        if (visited[`${newX},${newY}`]) continue;
                
        if (place[newY] && place[newY][newX] === 'O') {
          queue.enqueue([[newX, newY], distance + 1]);
          visited[`${newX},${newY}`] = true;
        } else if (place[newY] && place[newY][newX] === 'P') {
          isTooClose = distance + 1 > 2 
            ? 0
            : 1;
          break outer;
        }
      }
    }
        
    return isTooClose;
  }
}