function solution(n, left, right) {
  const arr = Array.from({ length: n * n }, (_, index) => (index % n) + 1);

  const arrLength = arr.length;

  for (let i = n; i < arrLength; i++) {
    const number = Math.floor(i / n) + 1;
    if (i % n < number) {
      arr[i] = number;
    }
  }

  return arr.slice(left, right + 1);
}
