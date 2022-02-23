function solution(m, n, board) {
  let answer = 0;
  const blocks = new Array(n).fill('');
  
  //0. 블럭이 쌓이는 방향을 고려해 블럭 재배치하기
  for (const s of board.reverse()) {
      s.split('').forEach((c, index) => {
          blocks[index] += c;
      });
  }
  
  blocks.forEach((s, index) => blocks[index] = s.split(''));
  
  while (true) {
      //1. 지워질 블럭의 인덱스 arr에 넣기
      const arr = [];
      
      for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < m - 1; j++) {
              blocks[i][j] 
              && blocks[i][j] === blocks[i + 1][j] 
              && blocks[i][j] === blocks[i][j + 1] 
              && blocks[i][j] === blocks[i + 1][j + 1]
              && arr.push([i, j]);
          }
      }
      
      //2. 지워질 블럭이 없으면 탐색 종료하고 개수 리턴
      if (!arr.length) {
          blocks.forEach(element => answer += m - element.length);
          
          return answer;
      }
      
      //3. 지워질 블럭 부분 0으로 바꾸기
      for (let i = 0; i < arr.length; i++) {
          const row = arr[i][0];
          const col = arr[i][1];
          
          blocks[row][col] = blocks[row + 1][col] = blocks[row][col + 1] = blocks[row + 1][col + 1] = 0;
      }
      
      //4. 지워진 블럭 당기기
      for (let i = 0; i < n; i++) {
          blocks[i] = blocks[i].filter(element => element !== 0);
      }
  }
  
  
  return answer;
}
