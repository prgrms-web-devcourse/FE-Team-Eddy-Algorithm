function solution(lottos, winNums) {
    const winNumsAscending = winNums.sort((a, b) => (a - b));
    const visibleNums = lottos.filter((num) => num !== 0);
    const unvisibleNumsLength = lottos.length - visibleNums.length;
    const visibleNumsAscending = visibleNums.sort((a, b) => (a - b));
    let correct = 0;
    const winNumsLength = winNums.length;

    for (const visibleNum of visibleNumsAscending) {
        for (const winNum of winNumsAscending) {
            if (visibleNum === winNum) {
                correct += 1;
                winNumsAscending.shift();
                break;
            } else if (visibleNum < winNum) {
                winNumsAscending.shift();
                break;
            }
        }
    }

    const ectCaseRank = 6;
    const maxCase = correct + unvisibleNumsLength;
    
    const maxRank = maxCase <= 1 ? ectCaseRank : winNumsLength - maxCase + 1;
    const minRank = correct <= 1 ? ectCaseRank : winNumsLength - correct + 1;

    return [maxRank, minRank];
}
