// 시도 예시용 코드
function func(waterBottle, copyWaterBottle, carry) {
  while (1) {
    let count = 0;
    let copyVal = copyWaterBottle;
    while (copyVal !== 0) {
      if (copyVal % 2 === 1) count++;
      copyVal = Math.floor(copyVal / 2);
    }
    if (count <= carry) break;
    copyWaterBottle++;
  }
  console.log(copyWaterBottle, waterBottle);
  console.log(copyWaterBottle - waterBottle);
}

func(13, 13, 1);
func(3, 3, 1);
func(1000000, 1000000, 5);

//백준용 코드
/*
  const fs = require('fs');
  const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
  
  const waterBottle = parseInt(inputData[0]);
  const copyWaterBottle = parseInt(inputData[0]);
  const carry = parseInt(inputData[1]);
  
  while (1) {
      let count = 0;
      let copyVal = copyWaterBottle;
      while (copyVal !== 0) {
        if (copyVal % 2 === 1) count++;
        copyVal = Math.floor(copyVal / 2);
      }
      if (count <= carry) break;
      copyWaterBottle++;
    }
    console.log(copyWaterBottle - waterBottle);
    */
