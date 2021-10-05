function solution(sizes) {
  let shorterMax = 0;
  let longerMax = 0;
  sizes.forEach(card => {
    card.sort((a, b) => a - b);
    const [shorter, longer] = card;
    if (shorter > shorterMax) {
      shorterMax = shorter;
    }
    if (longer > longerMax) {
      longerMax = longer;
    }
  });
  return shorterMax * longerMax;
}
