function solution(s) {
  let zeroRemoved = s;
  let loop = 0;
  let removedCount = 0;

  while (zeroRemoved !== "1") {
    const totalLength = zeroRemoved.length;
    zeroRemoved = zeroRemoved.split("").filter((bit) => parseInt(bit, 10));

    const afterRemoveLength = zeroRemoved.length;
    const removeLength = totalLength - afterRemoveLength;

    removedCount += removeLength;
    zeroRemoved = afterRemoveLength.toString(2);
    loop += 1;
  }

  return [loop, removedCount];
}
