const solution = (wordsStr) => {
    const orderRules = [0, 0, 0, 0, 0];
    let accumulator = 0;
    const maxWordLength = 5;
    const blankCase = 1;
    const alphabet = { 'A': 0, 'E': 1, 'I': '2', 'O':3, 'U': 4 };
    
    const words = wordsStr.split('');
    
    orderRules.forEach((_, index) => {
        orderRules[index] = accumulator * maxWordLength + blankCase;
        accumulator = orderRules[index];
    })
    
    orderRules.reverse();

    let order = 0;
    
    words.forEach((word, index) => {
        order += alphabet[word] * orderRules[index] + 1;
    })
    
    return order;
}
