function solution(sizes) {
  let maxWidth = -Infinity , maxHeight=-Infinity;
  sizes
    .map(card=>[Math.max(...card),Math.min(...card)])
    .forEach(card=>{
      const [cardWidth,cardHeight] = card
      maxWidth = Math.max(maxWidth, cardWidth)
      maxHeight = Math.max(maxHeight, cardHeight)
    })

  return maxWidth * maxHeight;
}
