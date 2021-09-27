function solution(sizes) {
  return sizes
      .map(size=>size.sort((a,b)=>a-b))
      .reduce(([width,height],size)=>
              [size[0] > width ? size[0]: width , size[1] > height ? size[1] : height]
             )
      .reduce((acc,length)=>acc*length)
}