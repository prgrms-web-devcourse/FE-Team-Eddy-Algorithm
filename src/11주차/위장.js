function solution(clothes) {
  // 1. 종류별로 의상 개수 구하기
  const obj = clothes.reduce((acc, [_, type]) => {
      if (!acc[type]) acc[type] = 0;
      acc[type]++;
      
      return acc;
  }, {});
    
  // 2. 종류별로 (개수 + 안입는 경우 1) 를 곱해 경우의 수 찾기 
  // 3. 옷을 하나도 입지 않는 경우는 없으므로 전체 경우의 수에서 1 빼기
  return Object.values(obj).reduce((acc, count) => acc *= (count + 1), 1) - 1;
}
