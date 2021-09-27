const reducer = (accumulator, currentValue) => parseInt(accumulator, 10) + parseInt(currentValue, 10)

const getBiggerCase = (weights, records) => {
    const biggerCase = [];
    const recordsLength = records.length;
    
    for (let i = 0; i < recordsLength; i++) {
        biggerCase.push(0)
    }
    
    records.forEach((record, recordIndex) => {
        record.forEach((element, elementIndex) => {
            if (element === '1'){
                const bigger = weights[recordIndex] < weights[elementIndex];
                const biggerCount = bigger ? 1 : 0;
                biggerCase[recordIndex] += biggerCount
            }
        });
    });
    
    return biggerCase;
}

const calculateWinRate = (weights, records, totalRounds) => {
    const rate = [];
    const recordsLength = records.length;
    
    for (let i = 0; i < recordsLength; i++) {
        rate.push(0)
    }
    
    records.forEach((record, index) => {
        const totalRound = totalRounds[index] ? (totalRounds[index]) : 1
        rate[index] = (record.reduce(reducer) / totalRound) * 100
    });
        
    return rate;
}

const solution = (weights, head2head) => {
    const records = [];
    const totalRounds = [];
    
    head2head.forEach((record) => {
        const totalRound = record.length - record.match(/N/g).length;
        totalRounds.push(totalRound)
        
        const replaceN = record.replace(/N/g, '0');
        const replaceL = replaceN.replace(/L/g, '0');
        const replaceW = replaceL.replace(/W/g, '1');

        records.push([...replaceW]);
    })

    const rate = calculateWinRate(weights, records, totalRounds);

    const biggerCase = getBiggerCase(weights, records);

    const cases = weights.map((weight, index) => ({
        index: index + 1,
        weight,
        biggerCase: biggerCase[index],
        winRate: rate[index],
    }));
    
    cases.sort((currentCase, targetCase) => {
        if (currentCase.winRate != targetCase.winRate) {
            return targetCase.winRate - currentCase.winRate;
        } else if (currentCase.biggerCase != targetCase.biggerCase) {
            return targetCase.biggerCase - currentCase.biggerCase;
        } else if (currentCase.weight != targetCase.weight) {
            return targetCase.weight - currentCase.weight;
        }
    })

    return cases.map((currentCase) => currentCase.index);
}
