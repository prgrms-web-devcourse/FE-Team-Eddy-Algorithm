function calculate(firstLine, secondLine) {
  const [A, B, E] = firstLine;
  const [C, D, F] = secondLine;
  let X = "X",
    Y = "Y";

  if (A * D - B * C !== 0) {
    X = (B * F - E * D) / (A * D - B * C);
    Y = (E * C - A * F) / (A * D - B * C);
  }

  if (Number.isInteger(X) && Number.isInteger(Y)) {
    return { X, Y };
  }
}

function solution(line) {
  var answer = [];
  let point = [];
  let calculateResult;
  const line_length = line.length;

  //정수 포인트 지점찾기
  for (let i = 0; i < line_length; i++) {
    for (let j = i + 1; j < line_length; j++) {
      calculateResult = calculate(line[i], line[j]);
      // calculate return이 없을경우 undefined일 경우 해당 부분은 if문이 성공X
      if (calculateResult) point.push(JSON.stringify(calculateResult));
    }
  }

  //중복 부분 처리 ex)4번 입출력
  let set = Array.from(new Set(point));
  set = set.map((val) => {
    return JSON.parse(val);
  });

  //만들 최소영역 찾기
  let maxWidth = -Infinity,
    minWidth = Infinity,
    maxHeight = -Infinity,
    minHeight = Infinity;

  set.map((obj) => {
    maxWidth = Math.max(maxWidth, obj.X);
    minWidth = Math.min(minWidth, obj.X);
    maxHeight = Math.max(maxHeight, obj.Y);
    minHeight = Math.min(minHeight, obj.Y);
  });

  let str = "";
  let findValue;

  //y위에서부터 아래로 체크 시작
  for (let y = maxHeight; y >= minHeight; y--) {
    str = "";
    //x위에서부터 오른쪽으로 체크 시작
    for (let x = minWidth; x <= maxWidth; x++) {
      //교점이 있다면 존재하는 값을 리턴
      findValue = set.filter((element) => {
        return element.X === x && element.Y === y;
      });
      if (findValue.length !== 0) str = str.concat("*");
      else str = str.concat(".");
    }
    //모은 *.합을 push
    answer.push(str);
  }
  return answer;
}

///
