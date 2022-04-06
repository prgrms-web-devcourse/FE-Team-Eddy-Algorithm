function solution(dirs) {
    let visited = []
    let rowPosition=5,columnPosition=5
    const twoDemArr = Array.from(Array(11),()=>Array(11).fill(0))
    // 처음시작지점
    dirs.split('').map((arrow)=>{
        if(arrow==='U' && twoDemArr[rowPosition-1]){
            if(rowPosition !== 0 && twoDemArr[rowPosition-1][columnPosition] === 0){
                rowPosition--;
                twoDemArr[rowPosition][columnPosition] === -1
                visited.push([rowPosition+0.5,columnPosition])
            }
        }
        else if(arrow==='D'&& twoDemArr[rowPosition+1]){
            if(rowPosition !== 10 && twoDemArr[rowPosition+1][columnPosition] ===0){
                rowPosition++;
            twoDemArr[rowPosition][columnPosition] === -1
             visited.push([rowPosition-0.5,columnPosition])
            }
        }
        else if(arrow==='L'&& twoDemArr[rowPosition][columnPosition-1]===0){
            if(columnPosition !== 0){
            columnPosition--;
                twoDemArr[rowPosition][columnPosition] === -1
             visited.push([rowPosition,columnPosition+0.5])
            }
        }else if(arrow==='R'&& twoDemArr[rowPosition][columnPosition+1] ===0){
            if(columnPosition !== 10){
            columnPosition++;
            twoDemArr[rowPosition][columnPosition] === -1
            visited.push([rowPosition,columnPosition-0.5])
            }
        }
    })
    return [... new Set(visited.map((arr)=>String(arr)))].length 
    
}