/*
1. 다리에 있는 트럭들 중 완료된 시간이 된 트럭들은 제거
2. 현재 다리에 있는 트럭의 무게 파악
3. 다음 트럭이 현재 다리의 트럭 무게와 계산 했을때 문제없을 시 추가
4. 1~3을 반복
*/

function solution(bridge_length, weight, truck_weights) {
  // 1초가 지났을때의 초기 설정
  let endTime = 1;
  let firstWeight = truck_weights.shift();
  let truckOnRoad = [{ weight: firstWeight, time: 1 }];
  let onRoadWeightSum = firstWeight;

  //truck이 다리에 없을때까지 반복
  while (truckOnRoad.length !== 0) {
    // 전체 시간과 각각의 트럭이 다리에 있는 시간을 계산 하고 bridge_length + 1이 되는 트럭은 완료로 제거
    endTime++;
    truckOnRoad = truckOnRoad
      .map(({ weight, time }) => ({ weight, time: time + 1 }))
      .filter(({ time }) => bridge_length + 1 !== time);
    // 다리에 있는 트럭의 무게 파악
    onRoadWeightSum = truckOnRoad.reduce((acc, { weight }) => acc + weight, 0);
    // 다음 트럭이 갈 수 있으면 추가
    if (weight >= onRoadWeightSum + truck_weights[0]) {
      truckOnRoad.push({ weight: truck_weights.shift(), time: 1 });
    }
  }
  return endTime;
}
