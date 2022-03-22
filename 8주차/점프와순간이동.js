function solution(n) {
    let answer = 0;

    while (n >= 1) {
        if (n % 2 !== 0) answer++; 
        n = Math.floor(n / 2);
    }
  
    return answer;
}
