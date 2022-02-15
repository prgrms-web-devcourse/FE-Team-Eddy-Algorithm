// 제출 코드 (가독성 낮음)

const calculate2 = (fees, accumulateParkingTime) => {
  const [basisTime, basisFee, unitTime, unitFee] = fees;
  if (accumulateParkingTime <= basisTime) return basisFee;
  else {
    return (
      basisFee +
      Math.ceil((accumulateParkingTime - basisTime) / unitTime) * unitFee
    );
  }
};

const calculate = (start, end) => {
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");
  const date1 = new Date(2020, 6, 1, startHour, startMinute);
  const date2 = new Date(2020, 6, 1, endHour, endMinute);
  return (date2.getTime() - date1.getTime()) / 1000 / 60;
};

function solution(fees, records) {
  var answer = [];
  const subAnswer = [];
  const obj = {};
  const resultObj = {};

  let inParking = [];
  records.map((record) => {
    const [time, carNumber, status] = record.split(" ");
    if (status === "IN") {
      inParking.push({ t: time, carNum: carNumber, s: status });
    } else {
      let start,
        end = time;
      inParking = inParking.filter(({ carNum, t }) => {
        if (carNumber === carNum) start = t;
        return carNumber !== carNum;
      });
      const parkingTime = calculate(start, end);
      obj[carNumber] = obj[carNumber]
        ? obj[carNumber] + parkingTime
        : parkingTime;
      //계산
    }
  });

  inParking.map(({ t, carNum, s }) => {
    const parkingTime = calculate(t, "23:59");
    obj[carNum] = obj[carNum] ? obj[carNum] + parkingTime : parkingTime;
  });

  for (const [key, accumulateParkingTime] of Object.entries(obj)) {
    resultObj[key] = resultObj[key]
      ? resultObj[key] + calculate2(fees, accumulateParkingTime)
      : calculate2(fees, accumulateParkingTime);
  }
  for (const [numKey, fee] of Object.entries(resultObj)) {
    subAnswer.push({ numKey: Number(numKey), fee });
  }
  return subAnswer.sort((a, b) => a.numKey - b.numKey).map((obj) => obj.fee);
}

// 수정 코드 (가독성 좀더 높임)

const calculateParkingFee = (fees, accumulateParkingTime) => {
  const [basisTime, basisFee, unitTime, unitFee] = fees;
  const addtionalFee =
    Math.ceil((accumulateParkingTime - basisTime) / unitTime) * unitFee;
  if (accumulateParkingTime <= basisTime) return basisFee;
  else return basisFee + addtionalFee;
};

const calculateAccParkingTime = (start, end) => {
  const [startHour, startMinute] = start.split(":");
  const [endHour, endMinute] = end.split(":");
  const parkingInTime = new Date(2020, 6, 1, startHour, startMinute);
  const parkingOutTime = new Date(2020, 6, 1, endHour, endMinute);
  return (parkingOutTime.getTime() - parkingInTime.getTime()) / 1000 / 60;
};

function solution(fees, records) {
  const parkingFeeArr = [];
  const parkingTimeObj = {};
  const parkingFeeObj = {};
  let inParking = [];
  // 입/출차 진행 차량 시간 계산
  records.map((record) => {
    const [time, carNumber, status] = record.split(" ");
    if (status === "IN") {
      inParking.push({ t: time, carNum: carNumber, s: status });
    } else {
      let start,
        end = time;
      inParking = inParking.filter(({ carNum, t }) => {
        if (carNumber === carNum) start = t;
        return carNumber !== carNum;
      });
      const parkingTime = calculateAccParkingTime(start, end);
      parkingTimeObj[carNumber] = parkingTimeObj[carNumber]
        ? parkingTimeObj[carNumber] + parkingTime
        : parkingTime;
    }
  });

  // 입차 후 출차 하지않은 차량 시간 계산
  inParking.map(({ t, carNum, s }) => {
    const parkingTime = calculateAccParkingTime(t, "23:59");
    parkingTimeObj[carNum] = parkingTimeObj[carNum]
      ? parkingTimeObj[carNum] + parkingTime
      : parkingTime;
  });

  // 누적 시간에 따르는 차량번호마다의 주차요금 계산
  for (const [key, accumulateParkingTime] of Object.entries(parkingTimeObj)) {
    const parkingFee = calculateParkingFee(fees, accumulateParkingTime);
    parkingFeeObj[key] = parkingFeeObj[key]
      ? parkingFeeObj[key] + parkingFee
      : parkingFee;
  }
  // 객체를 배열로 변경
  for (const [numKey, fee] of Object.entries(parkingFeeObj))
    parkingFeeArr.push({ numKey: Number(numKey), fee });
  return parkingFeeArr
    .sort((a, b) => a.numKey - b.numKey)
    .map((parkingTimeObj) => parkingTimeObj.fee);
}
