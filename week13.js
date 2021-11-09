function solution(k, dungeons) {
    const dungeonsLen = dungeons.length;
    const visited = [];
    for (let i = 0; i < dungeonsLen; i++) {
        visited[i] = false;
    }
    const dungeonCnt = 0;
    for (let i = 0; i < dungeonsLen; i++) {
        if (dungeons[i][0] <= k) {
            visitDungeon(visited, dungeons, i, k, dungeonsLen, dungeonCnt);
        }
    }
    return dungeonCnt
}
const visitDungeon = (visited, dungeons, i, k, len, dungeonCnt, cnt=0) => {
    visited[i] = true;
    k -= dungeons[i][1];
    for (let j = 0; j < len; j++) {
        if (!visited[j]) continue;
        if (dungeons[j][0] <= k) {
            visitDungeon(visited, dungeons, j, k, len, cnt+1)
        }
    }
    dungeonCnt = Math.max(dungeonCnt, cnt)
    visited[i] = false;
}
