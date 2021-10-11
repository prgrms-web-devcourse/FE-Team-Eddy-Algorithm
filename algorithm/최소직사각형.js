function solution(sizes) {
  return sizes
    .map((size) => size.sort((a, b) => a - b))
    .reduce(([width, height], [maxWidth,maxHeight]) => [
      maxWidth > width ? maxWidth : width,
      maxHeight > height ? maxHeight : height,
    ])
    .reduce((maxWidth, maxHeight) => maxWidth * maxHeight);
}
