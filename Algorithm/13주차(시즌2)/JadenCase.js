// 숫자는 toUpperCase를 해도 같은 문자열 숫자이다.
// " abc"는 val이 ''도 존재하고 해당 첫번째값에 접근하면 undefined가 나오기때문에 해당 상태에서 메소드를 사용하는 것은 에러가 발생하므로 조건부 처리

const changeFirstUpperCase = (val) =>
  val[0].toUpperCase().concat(val.slice(1, val.length).toLowerCase());

function solution(s) {
  return s
    .split(" ")
    .map((val) => (val[0] !== undefined ? changeFirstUpperCase(val) : val))
    .join(" ");
}
