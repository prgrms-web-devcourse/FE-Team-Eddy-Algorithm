// vscode : n이 10일때만 런타임 에러 발생 

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
  
  function solution(n, array) {
    let answer = [];
    const res = permutation(
      Array.from({ length: n }, (_, i) => i + 1),
      n
    );
    res.some((resArr) => {
      const arr = [];
      array.map((arrayVal, arrayIdx) => {
        let count = 0;
        resArr.some((resArrVal, resArrIdx) => {
          if (arrayIdx + 1 === resArrVal) {
            arr.push(count);
            return true;
          } else if (resArrVal > arrayIdx + 1) {
            count++;
          }
          return false;
        });
      });
      if (JSON.stringify(arr) === JSON.stringify(array)) {
        answer = resArr;
        return true;
      }
      return false;
    });
  
    return answer;
  }
  
  console.log(solution(4, [2, 1, 1, 0]));
  console.log(solution(5, [0, 0, 0, 0, 0]));
  console.log(solution(6, [5, 4, 3, 2, 1]));
  console.log(solution(7, [6, 1, 1, 1, 2, 0, 0]));
  console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  
  
  
  // 백준
  
  const fs = require('fs');
  const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');
  
  const n = parseInt(inputData[0]);
  const array = parseInt(inputData[1]);
  
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
  
  function solution(n, array) {
    let answer = [];
    const res = permutation(
      Array.from({ length: n }, (_, i) => i + 1),
      n
    );
    res.some((resArr) => {
      const arr = [];
      array.map((arrayVal, arrayIdx) => {
        let count = 0;
        resArr.some((resArrVal, resArrIdx) => {
          if (arrayIdx + 1 === resArrVal) {
            arr.push(count);
            return true;
          } else if (resArrVal > arrayIdx + 1) {
            count++;
          }
          return false;
        });
      });
      if (JSON.stringify(arr) === JSON.stringify(array)) {
        answer = resArr;
        return true;
      }
      return false;
    });
  
    return answer;
  }
  
  console.log(solution(n,array))
  
  
  
  /*
  
  function solution(n, array) {
    const arr = [];
    array.map((val, idx) => {
      let count = 1;
      if (!arr[val]) arr[val] = idx + 1;
      else {
        while (1) {
          if (!arr[val + count]) {
            arr[val + count] = idx + 1;
            break;
          } else {
            count++;
          }
        }
      }
    });
    return arr;
  }
  
  // console.log(solution(4, [2, 1, 1, 0])); //4 2 1 3
  // console.log(solution(5, [0, 0, 0, 0, 0])); //1 2 3 4 5
  // console.log(solution(6, [5, 4, 3, 2, 1, 0])); //6 5 4 3 2 1
  console.log(solution(7, [6, 1, 1, 1, 2, 0, 0])); //6 2 3 4 7 5 1
  // console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  