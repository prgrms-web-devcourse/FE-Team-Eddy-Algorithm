function solution(n)
{
    let count = 0
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