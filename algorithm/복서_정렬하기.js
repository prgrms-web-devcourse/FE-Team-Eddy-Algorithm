function solution(weights, head2head) {
  let result = new Array(weights.length).fill(0).map((_, idx) => idx + 1);
  let boxersWinRate = {};
  let beatHeavyBoxerCount = new Array(weights.length).fill(0);
  head2head.forEach((matchResults, playerIdx) => {
    let [totalMatch, winMatch] = [...matchResults].reduce(
      (acc, matchResult, oponentIdx) => {
        switch (matchResult) {
          case "W":
            acc[0]++;
            acc[1]++;
            weights[playerIdx] < weights[oponentIdx]
              ? beatHeavyBoxerCount[playerIdx]++
              : null;
            break;
          case "L":
            acc[0]++;
            break;
        }
        return acc;
      },
      [0, 0]
    );
    boxersWinRate[playerIdx] = totalMatch !== 0 ? winMatch / totalMatch : 0;
  });
  result.sort(
    (player1, player2) =>
      boxersWinRate[player2 - 1] - boxersWinRate[player1 - 1] ||
      beatHeavyBoxerCount[player2 - 1] - beatHeavyBoxerCount[player1 - 1] ||
      weights[player2 - 1] - weights[player1 - 1] ||
      player1 - player2
  );
  return result;
}
