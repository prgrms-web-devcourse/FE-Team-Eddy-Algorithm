function solution(n) {
  let number = n;
  let cost = 0;
  while (number > 0) {
    const isEven = number % 2 === 0;

    if (isEven) {
      number /= 2;
      continue;
    }

    number -= 1;
    cost += 1;
  }
  return cost;
}
