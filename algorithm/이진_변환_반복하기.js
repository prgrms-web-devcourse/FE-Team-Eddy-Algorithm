/*
프로그래머스 / 월간 코드 챌린지 시즌 1 / 이진 변환 반복하기
https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript
*/

function solution(s) {
  let zeroDeleteCountArray = [0, 0];
  while (s !== "1") {
    let initialLength = s.length;
    const newSLength = s.split("").filter((char) => char === "1").length;
    zeroDeleteCountArray[0]++;
    zeroDeleteCountArray[1] += initialLength - newSLength;
    s = newSLength.toString(2);
  }

  return zeroDeleteCountArray;
}
