function solution(land) {
    // 메모이제이션 해줄 이차원 배열
    const maxScore = Array.from({ length: land.length }, () => new Array(4).fill(0));
    // 시작 행에 land의 데이터 넣어두기
    maxScore[0] = land[0];

    // 마지막 행까지 돌면서 각각의 열에서 가질 수 최댓값 있는 넣어주기
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) { 
            // 최댓값 = 현재 땅의 점수 + 이전 행에서의 최대점수(단, 같은 열의 땅 제외)
            maxScore[i][j] = land[i][j] + Math.max(...maxScore[i - 1].filter((_, index) => index !== j));
        }
    }

    // 마지막 행에서의 최대점수(마지막 행의 각 땅까지 왔을 때 얻을 수 있는 최대값을 의미)
    return Math.max(...maxScore[maxScore.length - 1]);
}

console.log(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]));
