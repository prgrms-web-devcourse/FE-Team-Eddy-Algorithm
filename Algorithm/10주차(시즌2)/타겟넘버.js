const recursive = (count, maxCount, targetNumber, arr, answer) => {
  if (count === maxCount) return answer.push(targetNumber);
  else {
    recursive(count + 1, maxCount, targetNumber + arr[count], arr, answer);
    recursive(count + 1, maxCount, targetNumber - arr[count], arr, answer);
  }
};

function solution(numbers, target) {
  const answer = [];
  const res = recursive(0, numbers.length, 0, numbers, answer);
  return answer.filter((val) => val === target).length;
}
