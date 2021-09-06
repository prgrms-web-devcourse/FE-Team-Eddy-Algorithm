const solution = (word) => {
  const alphbets = ['A', 'E', 'I', 'O', 'U']
  const len = alphbets.length
  const dictionary = []

  for (let i = 1; i <= len; i++) {
    // 5개중 n개 뽑는 경우의 수 (len P i)
    const permutation = (array, selectNumber) => {
      const result = []
      if (selectNumber === 1) return array.map((v) => [v])

      array.forEach((value, _, array) => {
        const fixed = value
        const restArr = array
        const permutationArr = permutation(restArr, selectNumber - 1)
        const combineFix = permutationArr.map((v) => [fixed, ...v])
        result.push(...combineFix)
      })
      return result
    }

    permutation(alphbets, i).flatMap((value) => dictionary.push(value.join('')))
  }

  // sort
  dictionary.sort()

  // 이분탐색으로 순서 찾기
  return findPositionOfWord(word, dictionary)
}

const findPositionOfWord = (target, array) => {
  let min = 1
  let max = array.length
  let mid = Math.floor((min + max) / 2)

  while (target !== array[mid]) {
    // target === array[mid] 종료
    if (target < array[mid]) {
      max = mid - 1
      mid = Math.floor((min + max) / 2)
    } else {
      min = mid + 1
      mid = Math.floor((min + max) / 2)
    }
  }
  return mid + 1
}

console.log(solution('AAAAE'))
