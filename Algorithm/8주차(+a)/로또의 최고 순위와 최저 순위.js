function solution(lottos, win_nums) {
  const lotte = {
    rank : [6,6,5,4,3,2,1],
    noSee : 0,
    correctNum : 0
  }

  lottos.map(num=>{
    if(win_nums.indexOf(num) > -1)
      lotte.correctNum++;
    if(num == 0)
      lotte.noSee++;
  })
  return [lotte.rank[lotte.noSee+lotte.correctNum],lotte.rank[lotte.correctNum]];
}
