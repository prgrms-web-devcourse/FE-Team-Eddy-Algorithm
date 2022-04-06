// 찾는 위치가 P일때 거리두기 문제가 발생하는 상황
const checkTargetP = (place, x, y) => {
  if (place[x] && place[x][y + 1] === "O" && place[x][y + 2] === "P")
    return true;
  else if (
    place[x + 1] &&
    place[x + 2] &&
    place[x + 1][y] === "O" &&
    place[x + 2][y] === "P"
  )
    return true;
  else if (place[x + 1] && place[x + 1][y] === "P") return true;
  else if (place[x] && place[x][y + 1] === "P") return true;
  else if (
    place[x + 1] &&
    place[x + 1][y] === "O" &&
    place[x + 1][y + 1] === "P"
  )
    return true;
  else if (
    place[x + 1] &&
    place[x][y + 1] === "O" &&
    place[x + 1][y + 1] === "P"
  )
    return true;
  return false;
};
// 찾는 위치가 O일때 거리두기 문제가 발생하는 상황
const checkTargetO = (place, x, y) => {
  if (
    place[x] &&
    place[x + 1] &&
    place[x + 1][y] === "P" &&
    place[x][y + 1] === "P"
  )
    return true;
  return false;
};
// 찾는 위치가 X일때 거리두기 문제가 발생하는 상황
const checkTargetX = (place, x, y) => {
  if (
    place[x] &&
    place[x + 1] &&
    place[x + 1][y] === "P" &&
    place[x][y + 1] === "P" &&
    place[x + 1][y + 1] === "O"
  )
    return true;
  return false;
};

function solution(places) {
  const result = new Array(places.length).fill(1);
  let isDistanceProblem = false;
  places.map((place, idx) => {
    place.map((string, x) => {
      string.split("").map((_, y) => {
        if (place[x][y] === "P") {
          isDistanceProblem = checkTargetP(place, x, y);
        } else if (place[x][y] === "O") {
          isDistanceProblem = checkTargetO(place, x, y);
        } else if (place[x][y] === "X") {
          isDistanceProblem = checkTargetX(place, x, y);
        }
        if (isDistanceProblem) result[idx] = 0;
      });
    });
  });
  return result;
}
