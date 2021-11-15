const IsDistancing = (twoDemesionArr, i, j, k) => {
  if (twoDemesionArr[i][j][k] === "P") {
    if (
      twoDemesionArr[i][j][k + 1] === "P" ||
      twoDemesionArr[i][j + 1][k] === "P"
    )
      return false;
    if (twoDemesionArr[i][j + 1][k + 1] === "P") {
      if (
        twoDemesionArr[i][j + 1][k] === "O" ||
        twoDemesionArr[i][j][k + 1] === "O"
      )
        return false;
    }

    if (
      twoDemesionArr[i][j + 2][k] === "P" &&
      twoDemesionArr[i][j + 1][k] === "O"
    )
      return false;
    if (
      twoDemesionArr[i][j][k + 2] === "P" &&
      twoDemesionArr[i][j][k + 1] === "O"
    )
      return false;
  } else if (twoDemesionArr[i][j][k] === "X") {
    if (
      twoDemesionArr[i][j][k + 1] === "P" &&
      twoDemesionArr[i][j + 1][k] === "P" &&
      twoDemesionArr[i][j + 1][k + 1] === "O"
    )
      return false;
  } else if (twoDemesionArr[i][j][k] === "O") {
    if (
      twoDemesionArr[i][j][k + 1] === "P" &&
      twoDemesionArr[i][j + 1][k] === "P"
    )
      return false;
  }

  return true;
};

function solution(places) {
  let answer = [];
  let realAnswer = [];
  let isProblem = false;
  let Arr = [...places];
  Arr = Arr.map((arr) => {
    arr = arr.map((val) => {
      val = val.concat("X");
      val = val.concat("X");
      return val;
    });
    arr.push("XXXXXXX");
    arr.push("XXXXXXX");
    return arr;
  });

  places.forEach((arr, i) => {
    isProblem = false;
    arr.forEach((rows, j) => {
      answer = [];
      rows.split("").forEach((row, k) => {
        answer.push(IsDistancing(Arr, i, j, k));
      });
      if (answer.indexOf(false) > -1) isProblem = true;
    });
    if (isProblem) realAnswer.push(0);
    else realAnswer.push(1);
  });
  return realAnswer;
}
