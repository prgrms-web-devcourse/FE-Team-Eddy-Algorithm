function solution(sizes) {
  let shorterMax = 0;
  let longerMax = 0;
  sizes.forEach((card) => {
    card.sort((a, b) => a - b);
    if (card[0] > shorterMax) {
      shorterMax = card[0];
    }
    if (card[1] > longerMax) {
      longerMax = card[1];
    }
  });
  return shorterMax * longerMax;
}
