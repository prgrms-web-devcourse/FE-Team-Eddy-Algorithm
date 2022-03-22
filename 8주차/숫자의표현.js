function solution(n) {
  let answer = 1;
  const limit = n % 2 === 0 ? Math.floor(n / 3) : Math.floor(n / 2);

  for (let i = 1; i <= limit; i++) {
    let sum = 0;
    for (let j = i; j <= limit + 1; j++) {
      sum += j;

      if (sum >= n) {
        if (sum === n) answer++;
        break;
      }
    }
  }
  return answer;
}
