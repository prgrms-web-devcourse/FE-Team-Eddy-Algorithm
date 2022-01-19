// 테케 통과 , 0점
function solution(a, b, g, s, w, t) {
  var answer = -1;
  let endTime = 1;

  while (1) {
    let gold = 0,
      silver = 0;
    let isOkay = false;
    t.map((time, i) => {
      if (g[i] === 0) {
        let canPut = w[i] > s[i] ? s[i] : w[i];
        silver += Math.round(endTime / time / 2) * canPut;
      } else if (s[i] === 0) {
        let canPut = w[i] > g[i] ? g[i] : w[i];
        gold += Math.round(endTime / time / 2) * canPut;
      } else {
        if (Math.round(endTime / time / 2) * w[i] > a + b) isOkay = true;
      }
    });
    if ((gold >= a && silver >= b) || isOkay) {
      break;
    }
    endTime++;
  }

  return endTime;
}
