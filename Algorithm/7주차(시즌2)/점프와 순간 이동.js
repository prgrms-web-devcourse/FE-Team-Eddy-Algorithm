function solution(n)
{
    let count = 0
    // 목표지점으로부터 최대한 순간이동을 사용하도록 계산
    // 만약 홀수면 순간이동을 한 것이 아니니 앞으로 한칸 점프로 인식
    while(n!==0){
        if(n%2 === 0)
            n = n/2
        else{
            count++;
            n-=1
        } 
    }
    return count
}