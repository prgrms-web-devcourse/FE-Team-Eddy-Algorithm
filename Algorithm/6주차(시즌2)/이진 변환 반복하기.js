function solution(s) {
  let binaryChangeCount = 0;
  let eraseZeroCount = 0;
  while (s !== "1") {
    let eraseZeroStr = s.replace(/0/g, "").length;
    let zeroCount = s.length - eraseZeroStr;
    binaryChangeCount++;
    eraseZeroCount += zeroCount;
    s = eraseZeroStr.toString(2);
  }
  return [binaryChangeCount, eraseZeroCount];
}
