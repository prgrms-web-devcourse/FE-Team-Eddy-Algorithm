function solution(n, k) {
  let answer = 0;
  
  //1. k진수로 바꾸기
  let convertedNumber = '';
  while (true) {
    convertedNumber = n % k + convertedNumber;
    n = Math.floor(n / k);

    if (n < k) {
      convertedNumber = n + convertedNumber;
      break;
    }
  }

  //2. 바꾼 수에서 소수 개수 구하기
  convertedNumber
    .split('0')
    .forEach(element => findDecimal(Number(element)) && answer++);

  return answer;
}

const findDecimal = (n) => {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    } 
  }

  return n < 2 ? false : true;
};
