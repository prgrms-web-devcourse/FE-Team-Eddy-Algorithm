function solution(s) {
  if (s.length % 2 === 1) return 0;
  const arr = [];
  s.split("").map((str) => {
    if (arr.length === 0) arr.push(str);
    else if (arr[arr.length - 1] === str) arr.pop();
    else arr.push(str);
  });
  return arr.length === 0 ? 1 : 0;
}
