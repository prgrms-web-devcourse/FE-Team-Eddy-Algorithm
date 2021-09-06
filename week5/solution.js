const solution = (wordsStr) => {
    const alphabet = { 'A': 0, 'E': 1, 'I': '2', 'O':3, 'U': 4 }
    const increasing = [781, 156, 31, 6, 1]
    const words = wordsStr.split('')

    let order = 0
    words.forEach((word, index) => {
        order += alphabet[word] * increasing[index] + 1
    })
    return order
}
