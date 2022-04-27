function solution(s) {
  const numbers = s.split(" ").map(Number);
  let min = (max = numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    if (min > numbers[i]) min = numbers[i];
    if (max < numbers[i]) max = numbers[i];
  }

  return min + " " + max;
}
