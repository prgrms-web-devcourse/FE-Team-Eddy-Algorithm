function solution(files) {
  // 정렬순서: HEAD -> NUMBER
  // HEAD는 대소문자 구분 없이 오름차순
  // NUMBER는 숫자로 변환 시 오름차순 

  // 1. HEAD와 NUMBER 부분 분리
  const fileObj = files.reduce((acc, element) => {
    acc[element] = new Array(2).fill('');

    for (const e of element) {
      // 공백인 경우 Number 타입변환시 0이 반환되므로 숫자로 처리되지 않도록 따로 조건을 준다
      if (e === ' ' || Number(e) / 1 !== Number(e)) {
          if (acc[element][1]) break;
          
          acc[element][0] += e.toLowerCase();
      } else  {
          acc[element][1] += e;
      }
    }

    return acc;
  }, {});


  // 2. HEAD와 NUMBER 이용해서 정렬된 순서 구하기
  return Object.keys(fileObj).sort((a, b) => {
    if (fileObj[a][0] < fileObj[b][0]) return -1;
    else if (fileObj[a][0] > fileObj[b][0]) return 1;
    else {
      if (Number(fileObj[a][1]) < Number(fileObj[b][1])) return -1;
      else if (Number(fileObj[a][1]) > Number(fileObj[b][1])) return 1;
      else return 0;
    }
  });
}
