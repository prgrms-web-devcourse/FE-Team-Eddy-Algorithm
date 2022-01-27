function solution(n, a, b) {
  let count = 0;
  let divideA = a,
    divideB = b;
  while (divideA !== divideB) {
    divideA = Math.round(divideA / 2);
    divideB = Math.round(divideB / 2);
    count++;
  }
  return count;
}

/*
a or b        1   2   3   4   5   6   7   8   
Math.round    1   1   2   2   3   3   4   4   
Math.round    1   1   1   1   2   2   2   2   
*/
