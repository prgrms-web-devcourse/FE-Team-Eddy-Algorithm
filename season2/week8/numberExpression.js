function solution(n) {
  let acc = 0;

  const accs = Array.from({ length: n }, (_, index) => {
    acc += index + 1;
    return acc;
  });

  const accsLength = accs.length;
  let accGroup = {};
  for (let i = 0; i < accsLength; i++) {
    accGroup[`${accs[i]}`] = i + 1;
  }

  let index = 1;
  let caseCount = 0;
  for (; index < n; index++) {
    if (accs[index] === n) {
      caseCount += 1;
      break;
    }
    if (accs[index] > n) {
      break;
    }
  }

  for (; index < n; index++) {
    const num = accs[index] - n;
    if (accGroup[`${num}`]) {
      caseCount += 1;
    }
  }
  return caseCount;
}
