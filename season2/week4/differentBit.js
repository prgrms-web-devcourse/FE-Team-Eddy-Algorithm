function isBelowTwo(binary) {
  let countOne = 0;

  for (const num of binary) {
    if (num === "1") {
      countOne += 1;
    }

    if (countOne > 2) {
      return false;
    }
  }

  return true;
}

function findDifferentBit(number) {
  const binary = 2;
  let targetNumber = number + 1;

  while (true) {
    const xorResult = number ^ targetNumber;
    const xorResultBinary = xorResult.toString(binary);

    if (isBelowTwo(xorResultBinary)) {
      break;
    }

    targetNumber += 1;
  }

  return targetNumber;
}

function solution(numbers) {
  const answer = [];

  for (const number of numbers) {
    answer.push(findDifferentBit(number));
  }
  return answer;
}
