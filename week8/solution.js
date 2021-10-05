function solution(sizes) {
    let walletWidth = 0;
    let walletHeight = 0;
    
    for (const size of sizes) {
        const widthBigger = size.sort((width, height) => height - width);
        const [width, height] = widthBigger;
        
        if (walletWidth < width) {
            walletWidth = width
        }
        
        if (walletHeight < height) {
            walletHeight = height;
        }
    }

    return walletWidth * walletHeight;
}
