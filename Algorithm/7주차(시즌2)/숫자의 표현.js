function solution(n) {
    let answer = 0;
    // 근의공식 활용
    for(let i=Math.ceil(n/2);i>=1;i--){
        const startValue  = (1+Math.sqrt(1+4*(Math.pow(i,2)+i-2*n)))/2
        answer += Number.isInteger(startValue) ? 1 : 0
    }
    return answer+1;
}