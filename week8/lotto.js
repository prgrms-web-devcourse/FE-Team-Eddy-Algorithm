function solution(lottos, win_nums) {

  const LOTTO_LEN = 6;
  const nonZeroLottos = lottos.filter((num) => num !== 0); // 0이 아닌 숫자
  const numOfZero = LOTTO_LEN - nonZeroLottos.length; // 0의 개수

  // 0이 아닌 숫자 중 로또와 일치하는 숫자 개수
  const matchNum = nonZeroLottos.reduce((acc, cur) => {
    win_nums.forEach((num) => {
        num === cur && acc++
    });
    return acc;
  }, 0);

  // 일치 개수 -> 순위 변환
  const calRank = (match) => (match > 1 ? LOTTO_LEN - match + 1 : 6);

  // 0이 모두 일치했을 때 최고 순위
  const maxRank = calRank(matchNum + numOfZero);
  // 0이 모두 불일치할 때 최저 순위
  const minRank = calRank(matchNum);
  return [maxRank, minRank];
}
