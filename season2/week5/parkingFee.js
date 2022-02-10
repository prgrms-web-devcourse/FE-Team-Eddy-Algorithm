function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  const carNumberStart = 6;
  const carNumberEnd = 10;

  const parkingCost = [];
  const ascendingRecords = records.sort(
    (a, b) =>
      parseInt(a.slice(carNumberStart, carNumberEnd)) -
      parseInt(b.slice(carNumberStart, carNumberEnd))
  );

  let accumulatedHour = 0;
  let accumulatedMinute = 0;

  const carNumbers = ascendingRecords.map((record) =>
    record.slice(carNumberStart, carNumberEnd)
  );

  const carNumberSet = [...new Set(carNumbers)];
  const carNumberSetLength = carNumberSet.length;
  const allRecords = [];

  for (let i = 0; i < carNumberSetLength; i++) {
    const sameCarNumberRecord = ascendingRecords.filter(
      (record) => record.slice(carNumberStart, carNumberEnd) === carNumberSet[i]
    );
    allRecords.push(sameCarNumberRecord);
  }

  const endTime = "23:59";
  for (let i = 0; i < carNumberSetLength; i++) {
    const isAllOut = allRecords[i].length % 2 === 0;
    if (!isAllOut) {
      allRecords[i].push(`${endTime} ${carNumberSet[i]} OUT`);
    }
  }

  for (let i = 0; i < carNumberSetLength; i++) {
    const currentRecord = allRecords[i];
    const currentRecordLength = currentRecord.length;
    for (let j = 0; j < currentRecordLength; j += 2) {
      const currentRecordInfos = currentRecord[j + 1];
      const previousRecordInfos = currentRecord[j];

      const previousHour = parseInt(previousRecordInfos.slice(0, 2), 10);
      const previousMinute = parseInt(previousRecordInfos.slice(3, 5), 10);

      const currentHour = parseInt(currentRecordInfos.slice(0, 2), 10);
      const currentMinute = parseInt(currentRecordInfos.slice(3, 5), 10);

      accumulatedHour += currentHour - previousHour;
      accumulatedMinute += currentMinute - previousMinute;
    }

    const accumulatedTime = accumulatedMinute + accumulatedHour * 60;
    const extraFee =
      accumulatedTime > defaultTime
        ? Math.floor((accumulatedTime - defaultTime) / unitTime) * unitFee
        : 0;
    parkingCost.push(defaultFee + extraFee);
  }

  return parkingCost;
}
