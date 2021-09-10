function solution(weights, head2head) {
  // boxers = [인덱스, 몸무게, 승률, 무거운 상대 이긴 횟수]
  const boxers = []
  const numberOfBoxers = weights.length

  for (let i = 0; i < numberOfBoxers; i++) {
    const weight = weights[i]
    let totalPlayTimes = 0
    let countWin = 0
    let getWinWithHeavy = 0

    for (let j = 0; j < numberOfBoxers; j++) {
      const result = head2head[i][j]
      if (result !== 'N') totalPlayTimes++
      if (result === 'W') {
        countWin++
        weight < weights[j] && getWinWithHeavy++
      }
    }
    boxers.push([
      i + 1,
      weight,
      totalPlayTimes === 0 ? 0 : countWin / totalPlayTimes,
      getWinWithHeavy,
    ])
  }

  return boxers
    .sort((a, b) => {
      const [aIndex, aWeight, aScore, aWinHeavyTimes] = a
      const [bIndex, bWeight, bScore, bWinHeavyTimes] = b

      // 뺀 값이 양수면 뒤로
      if (aScore !== bScore) return bScore - aScore // 승률 높은 애가 앞
      if (aWinHeavyTimes !== bWinHeavyTimes)
        // 몸무게 무거운 복서 이긴횟수 높은 애가 앞
        return bWinHeavyTimes - aWinHeavyTimes
      // 본인 몸무게가 무거운 애가 앞
      if (aWeight !== bWeight) return bWeight - aWeight
      // 인덱스 숫자가 낮은 애가 앞
      else return aIndex - bIndex
    })
    .map((result) => result[0])
}

const weights = [50, 82, 75, 120]
const head2head = ['NLWL', 'WNLL', 'LWNW', 'WWLN']

console.log(solution(weights, head2head))
