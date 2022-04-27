function solution(bridge_length, weight, truck_weights) {
  const minTime = bridge_length + truck_weights.length; // 모든 트럭이 한 번에 다리 건널 경우의 시간 (최소시간)
  const trucks = truck_weights.reverse();
  const bridge = [];
  let delay = 0; // 지연되는 시간
  let total = 0; // 다리 위 총 트럭 무게
  let location = bridge_length;

  while (trucks.length > 0) {
    // 트럭이 모두 다리를 지나갈 때까지
    const target = trucks[trucks.length - 1];

    // 다리 제일 앞 쪽에서 빼주는 부분
    if (location === 0) {
      total -= bridge.shift(); // 트럭(또는 빈칸) 나감
      location++;
    }

    // 다리 끝 쪽에서 트럭(또는 빈칸)이 입장하는 부분
    if (total + target <= weight) {
      //트럭이 올라가는 경우
      trucks.pop();
      bridge.push(target);
      total += target;
    } else {
      // 트럭이 못올라가는 경우(시간이 1씩 딜레이 됨)
      bridge.push(0);
      delay++;
    }

    location--;
  }

  return minTime + delay;
}
