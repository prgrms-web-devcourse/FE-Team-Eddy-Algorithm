function solution(lottos, win_nums) {
  const rank = {
    // 맞춘 횟수 : 순위
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  }

  let countZero = 0,
    countCorrect = 0

  lottos.forEach((lotto) => {
    win_nums.includes(lotto) && countCorrect++
    lotto === 0 && countZero++
  })

  return [rank[countCorrect + countZero], rank[countCorrect]]
}
