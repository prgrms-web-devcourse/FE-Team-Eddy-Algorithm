/*
채점 결과
정확성: 81.8
합계: 81.8 / 100.0
*/

const checkLessNum = (numbers, checkNum, idx) => {
  while (1) {
    let num = 0;
    let includeOne = checkNum & numbers[idx];
    ((checkNum - includeOne) | (numbers[idx] - includeOne))
      .toString(2)
      .split("")
      .map((val) => {
        if (val === "1") num++;
      });
    if (1 <= num && num <= 2) break;
    else checkNum++;
  }
  return checkNum;
};

function solution(numbers) {
  const startCheckArr = numbers.map((number) => number + 1);
  return startCheckArr.map((checkNum, idx) =>
    checkLessNum(numbers, checkNum, idx)
  );
}
