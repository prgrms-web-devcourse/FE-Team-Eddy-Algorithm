function solution(clothes) {
  let answer = 0;
  
  const obj = clothes.reduce((acc, element) => {
    const [_, type] = element;

    if (!acc[type]) acc[type] = 0;
    acc[type]++;

    return acc;
  }, {});

  // 조합 만드는 함수
  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  }

  // 옷 종류별로 조합 만들기 (최소 1개 종류 ~ 최대 모든 종류)
  for (let i = 1; i <= Object.keys(obj).length; i++) {
    const temp = getCombinations(Object.keys(obj), i);

    temp.forEach((element) => {
      answer += element.reduce((acc, type) => {
        return acc *= obj[type];
      }, 1);
    });
  }

  return answer;
}

solution([["yellowhat", "top"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]);