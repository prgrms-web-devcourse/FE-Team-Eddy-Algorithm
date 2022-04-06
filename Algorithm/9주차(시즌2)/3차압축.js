function solution(msg) {
  const answer = [];
  const array = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arrMsg = msg.split("");

  let addDic = "";
  let nowInput = "";
  let nextChar = "";

  for (let i = 0; i < arrMsg.length; i++) {
    addDic = addDic.concat(arrMsg[i]);
    while (array.indexOf(addDic) > -1) {
      i++;
      nextChar = arrMsg[i];
      nowInput = addDic;
      addDic = addDic.concat(nextChar);
      // 새로운 값이 존재하지않으면 이전값까지를 찾아서 answer에 push
      if (array.indexOf(addDic) === -1) answer.push(array.indexOf(nowInput));
    }

    // `Oundefined` 예외처리
    if (nextChar !== undefined) array.push(addDic);
    addDic = "";
    i--;
  }
  return answer;
}
