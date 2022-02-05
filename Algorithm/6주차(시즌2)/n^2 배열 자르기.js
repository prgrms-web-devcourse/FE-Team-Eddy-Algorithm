// signal: aborted (core dumped) 오류 실패 코드

function solution(n, left, right) {
  var answer = [];
  let count = 1;
  let twoDemArr = Array.from(Array(n), () => Array(n).fill(null));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      twoDemArr[i][j] = count;
      twoDemArr[j][i] = count;
    }
    count++;
  }
  return twoDemArr.flatMap((x) => x).slice(left, right + 1);
}

// 성공코드

function solution(n, start, end) {
  const answer = [];
  while (start <= end) {
    let divide = Math.floor(start / n);
    let remain = Math.floor(start % n);
    // divide < remain은 row === column의 위치에서 remain-divide만큼 건너뛴 위치의 값 지정
    if (divide >= remain) answer.push(divide + 1);
    else answer.push(divide + 1 + remain - divide);
    start++;
  }
  return answer;
}
