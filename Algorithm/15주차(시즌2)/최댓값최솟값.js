function solution(s) {
  let max = -Infinity,
    min = Infinity;
  s.split(" ").map((val) => {
    max = Math.max(max, Number(val));
    min = Math.min(min, Number(val));
  });
  return String(min).concat(" ", String(max));
}
