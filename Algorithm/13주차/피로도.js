function solution(k, dungeons) {
  var answer = 0;
  dungeons.sort((a, b) => {
    let bb = b[0] - b[1],
      aa = a[0] - a[1];

    if (bb !== aa) return bb - aa;
    if (b[0] !== a[0]) return b[0] - a[0];
  });

  dungeons.forEach((arr) => {
    if (arr[0] <= k && k - arr[1] >= 0) {
      k = k - arr[1];
      answer++;
    }
  });
  return answer;
}
