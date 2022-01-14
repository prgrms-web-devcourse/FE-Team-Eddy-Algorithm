function solution(N, road, K) {
    const graph = Array.from(Array(N),()=>Array(N).fill(Infinity))
    road.map(([f,s,t])=>{
        graph[f-1][s-1] = Math.min(graph[f-1][s-1],t)
        graph[s-1][f-1] = Math.min(graph[s-1][f-1],t)
    })
     console.log(graph)
    let visited = [0]
    //방문 할 수 있는 곳들의 모임
    let queue = [0]
   
    while(queue.length){
        const cur = queue.shift()
        
            for(let j=0;j<graph[0].length;j++){
                if(visited[j] === undefined && isFinite(graph[cur][j])){
                    visited[j] = visited[cur] + graph[cur][j]
                    queue.push(j)
                    
                }
                
                    
          }
    }
      return visited.filter((val)=>val<=K).length
  }