/*
프로그래머스 / 월간 코드 챌린지 시즌3 / n^2배열 자르기
https://programmers.co.kr/learn/courses/30/lessons/87390?language=javascript
*/

function solution(n, left, right) {
  const result = [];
  for (let i = left; i < right + 1; i++) {
    const y = Math.floor(i / n);
    const x = i % n;
    result.push(x > y ? x + 1 : y + 1);
  }
  return result;
}
