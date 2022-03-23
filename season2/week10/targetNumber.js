function dfs(index, result, answer, target, numbers, numbersLen) {
  if (index === numbersLen && result === target) {
    answer += 1;
    return;
  }

  dfs(index + 1, result + numbers[index], answer, target, numbers, numbersLen);
  dfs(index + 1, result - numbers[index], answer, target, numbers, numbersLen);
}

function solution(numbers, target) {
  let answer = 0;
  const numbersLen = numbers.length;
  dfs(0, 0, answer, target, numbers, numbersLen);
  return answer;
}
