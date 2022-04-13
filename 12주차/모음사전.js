// ex. 두번째 단어 -> (해당 모음 순서 - 1) * (1 + 5 + 5 * 5 + 5 * 5 * 5)  5의 0승 + 5의 1승 + 5의 2승 + 5의 3승
// 5 - i - 1이 exponent의 limit (word에서 해당 w의 자리수)

function solution(word) {
  const chars = ['A', 'E', 'I', 'O', 'U'];
  const result = word.split('').reduce((acc, w, i) => {
      let count = 0;
      
      for (let exponent = 0; exponent < 5 - i; exponent++) {
          count += 5 ** exponent;
      }

      return acc += chars.indexOf(w) * count + 1; // 1은 단어 길이
  }, 0);

  return result;
}
