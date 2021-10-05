function solution(lottos, winNums) {
    const winNumsDescending = winNums.sort((a, b) => (b - a));
    const unvisibleNum = 0;
    const visibleNums = lottos.filter((num) => num !== unvisibleNum);
    const unvisibleNumsLength = lottos.length - visibleNums.length;
    const visibleNumsDescending = visibleNums.sort((a, b) => (b - a));
    let correct = 0;
    const winNumsLength = winNums.length;
    const visibleNumsLength = visibleNums.length;

    for (let i = visibleNumsLength - 1; i >= 0; i--) {
        for (let j = winNums.length - 1; j >= 0; j--) {
            const visibleNum = visibleNumsDescending[i];
            const winNum = winNumsDescending[j];
            
            if (visibleNum === winNum) {
                correct += 1;
                winNumsDescending.pop();
                break;
            } else if (visibleNum < winNum) {
                break;
            } else {
                winNumsDescending.pop();
            }
        }
    }

    const ectCaseRank = 6;
    const maxCase = correct + unvisibleNumsLength;
    
    const maxRank = maxCase <= 1 ? ectCaseRank : winNumsLength - maxCase + 1;
    const minRank = correct <= 1 ? ectCaseRank : winNumsLength - correct + 1;

    return [maxRank, minRank];
}
