function solution(bridge_length, weight, truck_weights) {
  let [totalWeight, time] = [0, 0];
  let remain = truck_weights.length;
  let bridge = [];
  truck_weights.reverse();
  while (remain > 0) {
    time++;
    // bridge 소거조건
    if (bridge.length > 0 && time == bridge[0][1] + bridge_length) {
      totalWeight -= bridge.shift()[0];
      remain -= 1;
    }
    // bridge 삽입 조건
    if (
      truck_weights.length > 0 &&
      totalWeight + truck_weights[truck_weights.length - 1] <= weight
    ) {
      totalWeight += truck_weights[truck_weights.length - 1];
      bridge.push([truck_weights.pop(), time]);
    }
    // time slip
    else if (bridge.length > 0) {
      time = bridge[0][1] + bridge_length - 1;
    }
  }
  return time;
}
