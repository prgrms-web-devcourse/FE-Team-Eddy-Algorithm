function solution(n, left, right) {
  const length = right - left + 1;
  const answer = Array.from({ length }, (_, index) => ((index + left) % n) + 1);

  for (let i = 0; i < length; i++) {
    const currentIndex = i + left;
    const number = Math.floor(currentIndex / n) + 1;
    const isSequentialNumber = currentIndex % n >= number;
    if (isSequentialNumber) {
      continue;
    }
    answer[i] = number;
  }

  return answer;
}
