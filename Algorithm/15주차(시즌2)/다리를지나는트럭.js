/* 
전에 푸는 풀이 순서만 참조 

1. roadTruck의 time이 현재 시간과 맞는 것이 있다면 제거
2. 제거 후 새로운 truck이 들어갈 수 있다면 추가
3. 현재 road에 있는 트럭들에 대해 time을 1씩 추가
4. 시간을 증가 후 road에 트럭이 아예 없다면 종료 
5. 1~4를 반복

*/

function solution(bridge_length, weight, truck_weights) {
  let roadTruck = [];
  let time = 0,
    isEnd = false;

  while (!isEnd) {
    roadTruck = roadTruck.filter(({ time }) => time !== bridge_length);
    const sumRoadTruckWeight = roadTruck.reduce(
      (acc, val) => acc + val.weight,
      0
    );
    if (sumRoadTruckWeight + truck_weights[0] <= weight) {
      roadTruck.push({ time: 0, weight: truck_weights[0] });
      truck_weights.shift();
    }
    roadTruck = roadTruck.map((val) => ({ ...val, time: val.time + 1 }));

    time++;
    if (roadTruck.length === 0) isEnd = true;
  }

  return time;
}
