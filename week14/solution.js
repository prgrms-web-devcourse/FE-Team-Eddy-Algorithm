function bfs(place) {
    const places = []
    for (const element of place) {
        places.push(element.split(''));
    }

    const queue = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (places[i][j] === 'P') {
                
                queue.push([i, j, 0]);
                  const visited = [[false], [false], [false], [false], [false]];
                
                const leftNright = [0, 0, -1, 1];
                const upNdown = [-1, 1, 0, 0];

                while (queue.length > 0) {
                    const [x, y, distance] = queue.shift();
                    visited[x][y] = true;

                    for (let i = 0; i < 4; i++) {
                        const newX = x + leftNright[i];
                        const newY = y + upNdown[i];
                        const newDistance = distance + 1
                        
                        if (0 <= newX < 5 && 0 <= newY < 5 && visited[newX][newY] === false) {
                            if (place[newX][newY] === 'O') {
                                queue.push([newX, newY, newDistance])
                            } else if (place[newX][newY] === 'P' && newDistance <= 2) {
                                return 0;
                            }
                        } 
                    }
                }
            }
        }
    }
    return 1
}

function solution(places) {
    const answer = [];
    for (const place of places) {
        answer.push(bfs(place));
    }
    
    return answer;
}
