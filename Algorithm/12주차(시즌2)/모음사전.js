// 정답코드
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr;
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result.map((val) => val.join(",").replace(/,/g, ""));
}

function solution(word) {
  const dic = [];
  for (let i = 1; i <= 5; i++)
    dic.push(permutation(["A", "E", "I", "O", "U"], i));
  return dic.flat(Infinity).sort().indexOf(word) + 1;
}

/*
  풀이방법 : AEIOU의 중복된 상태를 포함한 전체 가짓수를 나열한다음 이를 sort로 dictionary 정렬 후 idx를 찾는다.

  기존 permutation의 변형 : 중복을 따로 filter로 제거하지않게 코테에서는 사용했다. 

  function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
  }

  flat 메소드 사용 : 매개변수로 평탄화의 level을 지정할 수 있어 Infinity를 부여하여 1차원형태로 만든다. 
*/
