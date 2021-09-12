const reducer = (accumulator, currentValue) => parseInt(accumulator, 10) + parseInt(currentValue, 10)

const getBiggerCase = (weights, records) => {
    const biggerCase = [];
    const recordsLength = records.length;
    for (let i = 0; i < recordsLength; i++) {
        biggerCase.push(0);
    }
    
    records.forEach((record, index) => {  
        record.forEach((element, index2) => {
            if (element === '1'){
                const bigger = weights[index] < weights[index2];
                const biggerCount = bigger ? 1 : 0;
                biggerCase[index] += biggerCount;
            }
        });
    });
    
    return biggerCase;
}

const calculateWinRate = (records) => {
    const rate = [];
    const recordsLength = records.length;
    for (let i = 0; i < recordsLength; i++) {
        rate.push(0)
    }
    records.forEach((record, index) => 
        rate[index] = (record.reduce(reducer) / (recordsLength - 1)) * 100
    );
        
    return rate;
}

const solution = (weights, head2head) => {
    const records = [];
    const str = [];

    head2head.forEach((record) => {
        const replaceN = record.replace(/N/g, '0');
        const replaceL = replaceN.replace(/L/g, '0');
        const replaceW = replaceL.replace(/W/g, '1');
        str.push(replaceW);
        records.push([...replaceW]);
    })

    const rate = calculateWinRate(records);

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
        }

        if (currentCase.biggerCase != targetCase.biggerCase) {
            return targetCase.biggerCase - currentCase.biggerCase;
        }

        if (currentCase.weight != targetCase.weight) {
            return targetCase.weight - currentCase.weight;
        }
    })

    return cases.map((currentCase) => currentCase.index);
}
