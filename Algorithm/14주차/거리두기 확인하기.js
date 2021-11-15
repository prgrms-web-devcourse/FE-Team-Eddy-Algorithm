const IsDistancing = (places7x7, i, j, k) => {
  if (places7x7[i][j][k] === "P") {
    if (places7x7[i][j][k + 1] === "P" || places7x7[i][j + 1][k] === "P")
      return false;

    if (places7x7[i][j + 1][k + 1] === "P") {
      if (places7x7[i][j + 1][k] === "O" || places7x7[i][j][k + 1] === "O")
        return false;
    }

    if (places7x7[i][j + 2][k] === "P" && places7x7[i][j + 1][k] === "O")
      return false;

    if (places7x7[i][j][k + 2] === "P" && places7x7[i][j][k + 1] === "O")
      return false;
  } else if (places7x7[i][j][k] === "X") {
    if (
      places7x7[i][j][k + 1] === "P" &&
      places7x7[i][j + 1][k] === "P" &&
      places7x7[i][j + 1][k + 1] === "O"
    )
      return false;
  } else if (places7x7[i][j][k] === "O") {
    if (places7x7[i][j][k + 1] === "P" && places7x7[i][j + 1][k] === "P")
      return false;
  }

  return true;
};

function solution(places) {
  let rowArr = [];
  let answer = [];
  let isProblem = false;
  let places7x7 = [...places];

  places7x7 = places7x7.map((arr) => {
    arr = arr.map((val) => {
      val = val.concat("X");
      val = val.concat("X");
      return val;
    });
    arr.push("XXXXXXX");
    arr.push("XXXXXXX");
    return arr;
  });

  // 각각의 arr 실행
  places.forEach((waitRoomArr, i) => {
    isProblem = false;
    // 5*5 행렬 waitRoomArr 실행
    waitRoomArr.forEach((rows, j) => {
      rowArr = [];
      // 1~5행을 각각 실행  (크게만든 6,7행은 순회해도 의미가 없으니 순회하지않는다.)
      isProblem = rows.split("").some((_, k) => {
        rowArr.push(IsDistancing(places7x7, i, j, k));
        return rowArr.indexOf(false) > -1;
      });
    });

    if (isProblem) answer.push(0);
    else answer.push(1);
  });
  return answer;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
