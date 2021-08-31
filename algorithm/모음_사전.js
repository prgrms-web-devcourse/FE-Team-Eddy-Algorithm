function solution(word) {
  let answer = 0;
  let restDigit = 5;
  const wordPriority = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  for (const char of word) {
    restDigit--;
    answer += 1 + wordPriority[char] * countRest(restDigit);
  }
  return answer;

  function countRest(count) {
    let res = 1;
    if (count > 0) {
      res += 5 * countRest(count - 1);
    }
    return res;
  }
}
