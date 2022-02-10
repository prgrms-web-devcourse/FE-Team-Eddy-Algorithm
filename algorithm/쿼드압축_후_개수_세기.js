function solution(arr) {
  const result = [0, 0];
  const initialSize = arr.length;

  function recursion(x, y, size) {
    const initNumber = arr[y][x];
    const range = Array.from({ length: size }, (_, index) => index);
    for (const dx of range) {
      for (const dy of range) {
        if (arr[y + dy][x + dx] !== initNumber) {
          recursion(x + size / 2, y, size / 2);
          recursion(x, y + size / 2, size / 2);
          recursion(x, y, size / 2);
          recursion(x + size / 2, y + size / 2, size / 2);
          return;
        }
      }
    }
    result[initNumber]++;
  }

  recursion(0, 0, initialSize);

  return result;
}
