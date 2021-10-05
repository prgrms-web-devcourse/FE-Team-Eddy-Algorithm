function solution(sizes) {
  let shorterMax = 0;
  let longerMax = 0;
  sizes.forEach(card => {
    const [shorter, longer] = card.sort((a, b) => a - b);
    if (shorter > shorterMax) {
      shorterMax = shorter;
    }
    if (longer > longerMax) {
      longerMax = longer;
    }
  });
  return shorterMax * longerMax;
}
