function solution(weights, head2head) {
  let win = Array.from(Array(weights.length), () => []).fill(0);
  let winFromMoreWeight = Array.from(Array(weights.length), () => []).fill(0);
  let lose = Array.from(Array(weights.length), () => []).fill(0);

  head2head.forEach((member, idx) => {
    member.split("").forEach((result, otherIdx) => {
      if (result === "W" && weights[idx] < weights[otherIdx])
        winFromMoreWeight[idx] = winFromMoreWeight[idx] + 1;
      else if (result === "W") win[idx] = win[idx] + 1;
      else if (result === "L") lose[idx] = lose[idx] + 1;
    });
  });

  const memObj = weights.map((w, i) => ({
    weight: w,
    win: win[i] / (lose[i] + win[i]) ? win[i] / (lose[i] + win[i]) : 0,
    more: winFromMoreWeight[i],
    idx: i + 1,
  }));

  return memObj
    .sort((a, b) => {
      if (a.win !== b.win) return b.win - a.win;
      if (a.more !== b.more) return b.more - a.more;
      if (a.weight !== b.weight) return b.weight - a.weight;
    })
    .map((t) => t.idx);
}
