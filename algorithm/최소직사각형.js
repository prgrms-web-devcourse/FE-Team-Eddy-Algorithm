function solution(sizes) {
  return sizes
    .map(([w, h]) => (w > h ? [w, h] : [h, w]))
    .sort((a, b) => b[0] - a[0])
    .reduce((acc, [_, h], idx, arr) => {
      const maxWidth = arr[0][0]
      const maxResult = maxWidth * h
      if (maxResult > acc) acc = maxResult
      return acc
    }, 0)
}
const sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]
console.log(solution(sizes))
