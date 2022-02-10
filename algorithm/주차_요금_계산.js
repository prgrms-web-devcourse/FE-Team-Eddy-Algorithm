/*
프로그래머스 / 2022 KAKAO BLIND RECRUITMENT / 주차 요금 계산
https://programmers.co.kr/learn/courses/30/lessons/92341
*/

function solution(fees, records) {
  const [basisTime, basisFee, unitTime, unitFee] = fees;
  records = records.map((record) => record.split(" "));
  const timeSpentMap = {};
  const historyMap = {};

  // 입고, 출차 시간 계산
  for (const record of records) {
    const [time, carNumber, history] = record;
    const timeFormatted = _formatTimeToMinute(time);
    if (history === "IN") {
      historyMap[carNumber] = timeFormatted;
      continue;
    }
    const timeSpent = timeFormatted - historyMap[carNumber];
    timeSpentMap[carNumber] = _hashMapCounter(
      timeSpentMap[carNumber],
      timeSpent
    );
    delete historyMap[carNumber];
  }

  // 남은 주차 기록
  Object.entries(historyMap).forEach(([carNumber, timeHistory]) => {
    const timeSpent = 24 * 60 - 1 - timeHistory;
    timeSpentMap[carNumber] = _hashMapCounter(
      timeSpentMap[carNumber],
      timeSpent
    );
  });

  // 요금 청구
  return Object.entries(timeSpentMap)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([_, timeSpent]) =>
      timeSpent > basisTime
        ? basisFee + Math.ceil((timeSpent - basisTime) / unitTime) * unitFee
        : basisFee
    );

  function _formatTimeToMinute(time) {
    return time
      .split(":")
      .map(Number)
      .reduce((hour, minute) => hour * 60 + minute);
  }

  function _hashMapCounter(hashMapValue, increaseValue) {
    return hashMapValue ? hashMapValue + increaseValue : increaseValue;
  }
}
