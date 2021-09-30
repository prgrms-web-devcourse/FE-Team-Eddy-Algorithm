function solution(weights, head2head) {
  /*
    승률 내림차순
    몸무게 무거운 복서 이긴 횟수 내림차순
    몸무게 내림차순
    번호 오름차순
    
    처음에 승률을 (이긴 횟수)/(참가자 수 - 1)로 계산해서 테케 2~4, 6~10 실패
    알고보니 N은 아예 경기를 안한 것,,,
    (이긴 횟수)/(W, L 수)로 바꿨더니 테케 전체 통과됨
  */
  const boxerInfo = (string, myIdx) => {
    let matchCnt = 0; // 경기 횟수
    let winCnt = 0; // 승리 횟수
    let winHeavierCnt = 0; // 무거운 사람 승리 횟수
    const myWeight = weights[myIdx];
    [...string].forEach((matchResult, idx) => {
      if (matchResult !== 'N') matchCnt++;
      if (matchResult === 'W') {
        myWeight < weights[idx] ? winHeavierCnt++ : null;
        winCnt++;
      }
    });
    const winRate = matchCnt ? winCnt / matchCnt : 0; // matchCnt(winCnt도 됨)이 0이면 0
    return [winRate, winHeavierCnt, myWeight, myIdx + 1]; // [승률, 무거운 사람 승리, 몸무게, 번호]
  };

  const boxerSort = (a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        if (a[2] === b[2]) {
          return a[3] - b[3]; // 번호 오름차순
        }
        return b[2] - a[2]; // 몸무게 내림차순
      }
      return b[1] - a[1]; // 무거운 사람 승리 횟수 내림차순
    }
    return b[0] - a[0]; // 승률 내림차순
  };

  const boxer = head2head
    .map(boxerInfo)
    .sort(boxerSort)
    .map((info) => info[3]); // 번호 추출

  return boxer;
}
