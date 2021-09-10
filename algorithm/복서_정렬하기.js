function solution(weights, head2head) {
  // 승률 높은 복서가 앞.
  // 승률이 동일할 때 몸무게 무거운 복서 이긴횟수 높은 애가 앞
  // 앞에것도 전부 동일하면 본인 몸무게가 무거운 애가 앞
  // 나머지도 동일할 땐 번호가 작은게 앞

  // winningRate = [인덱스, 몸무게, 승률, 무거운 상대 이긴 횟수]
  const winningRate = []
  const len = weights.length

  for (let i = 0; i < len; i++) {
    const main = weights[i]
    let totalPlayTimes = 0
    let countWin = 0
    let GetWinWithHeavy = 0

    for (let j = 0; j < len; j++) {
      const result = head2head[i][j]
      if (result !== 'N') totalPlayTimes++
      if (result === 'W') {
        countWin++
        main < weights[j] && GetWinWithHeavy++
      }
    }
    winningRate.push([
      i + 1,
      main,
      totalPlayTimes === 0 ? 0 : countWin / totalPlayTimes,
      GetWinWithHeavy,
    ])
  }

  winningRate.sort((a, b) => {
    const [aIndex, aWeight, aScore, aWinHeavyTimes] = a
    const [bIndex, bWeight, bScore, bWinHeavyTimes] = b

    if (aScore > bScore) return -1
    if (aScore === bScore) {
      if (aWinHeavyTimes > bWinHeavyTimes) return -1
      if (aWinHeavyTimes === bWinHeavyTimes) {
        if (aWeight > bWeight) return -1
        if (aWeight === bWeight) {
          if (aIndex > bIndex) return 1
        }
      }
    }
  })

  return winningRate.map((result) => result[0])
}

const weights = [50, 82, 75, 120]
const head2head = ['NLWL', 'WNLL', 'LWNW', 'WWLN']

console.log(solution(weights, head2head))
