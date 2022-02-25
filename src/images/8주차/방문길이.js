function solution(dirs) {
  let answer = 0;
  const curr = [0, 0];

  dirs.split('').reduce((acc, element) => {
    const next = [];
    next.push(curr[0], curr[1]);

    // 1. 명령어 별 처리 (좌표 내에서만 이동)
    switch(element) {
      case 'U':
        if (curr[1] < 5) {
          next[1] = next[1] + 1;
        }
        break;
      case 'L':
        if (curr[0] > -5) {
          next[0] -= 1;
        }
        break;
      case 'D':
        if (curr[1] > -5) {
          next[1] -= 1;
        }
        break;
      case 'R':
        if (curr[0] < 5) {
          next[0] += 1;
        }
        break;
      default:
        break;
    }

    // 2. 좌표 밖이라서 이동하지 않은 경우에는 아무처리도 하지 않음
    if (curr[0] === next[0] && curr[1] === next[1]) {
      return acc;
    }

    // 3. 현재 좌표와 이동 후 좌표 사이를 최초로 걸은 경우 연결표시 후 길의 개수 1 증가
    const currKey = curr.join('');
    const nextKey = next.join('');

    if (!acc[currKey]) {
      acc[currKey] = [];
    } 
    
    if (!acc[nextKey]) {
      acc[nextKey] = [];
    }
    
    // 4. 현재 좌표와 이동 후 좌표 사이를 최초로 걸은 경우 연결표시 후 길의 개수 1 증가
    if (!acc[currKey].some((c) => c === nextKey) && !acc[nextKey].some((n) => n === currKey)) {
      acc[currKey].push(nextKey);
      acc[nextKey].push(currKey);
      answer++;
    }

    // 5. 현재 좌표 이동시키기
    curr[0] = next[0];
    curr[1] = next[1];

    return acc;
  }, {});

  return answer;
}
