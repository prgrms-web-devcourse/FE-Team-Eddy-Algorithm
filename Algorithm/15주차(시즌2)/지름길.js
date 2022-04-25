function solution(n, road, arr) {
  // 가장 효율적인 배열 순서를 나열
  // [start, end, length, percent, 지름길의 이득 차이]
  let filterArr = arr
    .map((val) => [
      ...val,
      (val[1] - val[0]) / val[2],
      val[1] - val[0] - val[2],
    ])
    .filter(
      ([start, end, length, percent]) =>
        end - start >= length && end <= road && percent >= 1
    )
    .sort((a, b) => {
      if (b[3] !== a[3]) return b[3] - a[3];
      return b[2] - b[1] - (a[2] - a[1]);
    });

  // 중복되는 문제가 발생되는 부분 값들 제거
  const calculateArr = filterArr.filter(
    ([start, end, length, percent], idx) => {
      let isProblem = false;
      for (let i = 0; i < idx; i++) {
        // 끝값이 다른 시작값보다 작으면 (문제없음)
        // 첫번째 값이 다른 끝나는 값보다 작으면 (문제없음)
        // 그외에 전부 문제 발생 (중복이 존재)
        if (filterArr[i][0] >= end) {
        } else if (filterArr[i][1] <= start) {
        } else {
          isProblem = true;
        }
      }
      return !isProblem;
    }
  );

  // 남은 필요한 배열들을 차이만큼 처리하여 계산한 값을 반환
  const sumCalculateDistance = calculateArr.reduce(
    (acc, [, , , , val]) => acc + val,
    0
  );

  return road - sumCalculateDistance;
}

console.log(
  solution(5, 150, [
    [0, 50, 10],
    [0, 50, 20],
    [50, 100, 10],
    [100, 151, 10],
    [110, 140, 90],
  ]) === 70
);

console.log(
  solution(2, 100, [
    [10, 60, 40],
    [50, 90, 20],
  ]) === 80
);

console.log(
  solution(8, 900, [
    [0, 10, 9],
    [20, 60, 45],
    [80, 190, 100],
    [50, 70, 15],
    [160, 180, 14],
    [140, 160, 14],
    [420, 901, 5],
    [450, 900, 0],
  ]) === 432
);
