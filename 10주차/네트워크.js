function solution(n, computers) {
  let answer = 0;
  const check = new Array(n).fill(false);

  const DFS = (curr) => {
    check[curr] = true;

    computers[curr].forEach((element, next) => {
      if (!check[next] && element) DFS(next);
    });
  }

  // 인덱스별로 돌면서 네트워크 한 개 찾으면 answer++
  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      DFS(i);
      answer++;
    }
  }

  return answer;
}

console.log(solution(3,	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	));