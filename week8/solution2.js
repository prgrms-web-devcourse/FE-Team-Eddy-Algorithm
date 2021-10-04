function solution(lottos, winNumsOrigin) {
    const winNumsAscending = winNumsOrigin.sort((a, b) => (a - b));
    const visibleNums = lottos.filter((num) => num !== 0);
    const unvisibleNumsLength = lottos.length - visibleNums.length;
    const visibleNumsAscending = visibleNums.sort((a, b) => (a - b));
    let correct = 0;
    
    for (const visibleNum of visibleNumsAscending) {
        for (const winNum of winNumsAscending) {
            if (visibleNum === winNum) {
                correct += 1;
            } else if (visibleNum < winNum) {
                break;
            }
        }
    }

    const ectCaseRank = 6;
    const maxCase = correct + unvisibleNumsLength;
    const maxRank = maxCase <= 1 ? ectCaseRank : winNumsOrigin.length - maxCase + 1;
    const minRank = correct <= 1 ? ectCaseRank : winNumsOrigin.length - correct + 1;
    
    return [maxRank, minRank];
}
