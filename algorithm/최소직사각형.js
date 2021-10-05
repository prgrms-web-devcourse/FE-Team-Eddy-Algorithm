function solution(sizes) {
  return sizes
    .map((size) => size.sort((a, b) => b - a))
    .reduce(
      (acc, [largeNum, smallNum]) => {
        acc[0] = largeNum > acc[0] ? largeNum : acc[0]
        acc[1] = smallNum > acc[1] ? smallNum : acc[1]
        return acc
      },
      [0, 0]
    )
    .reduce((acc, num) => {
      return (acc *= num)
    }, 1)
}
