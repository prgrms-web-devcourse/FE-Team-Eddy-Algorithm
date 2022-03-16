function solution(msg) {
  const indexNumbers = {};

  const firstWord = "A";
  Array.from(
    { length: 26 },
    (_, index) =>
      (indexNumbers[String.fromCharCode(firstWord.charCodeAt(0) + index)] =
        index + 1)
  );
  const output = [];
  const msgLength = msg.length;

  const copy = msg;
  for (let i = 0; i < msgLength; i++) {
    let n = copy[i];
    let index = i;

    while (indexNumbers[n] !== undefined) {
      index += 1;

      n = copy.slice(0, index);
      if (indexNumbers[n] === undefined) {
        break;
      }
    }

    if (indexNumbers[n] === undefined) {
      n = n.slice(0, n.length - 1);
      const currentMsg = msg[i];
      const nextMsg = msg[i + 1];
      indexNumbers[currentMsg + nextMsg] = Object.keys(indexNumbers).length + 1;
    } else {
      const currentMsg = msg[i];
      output.push(indexNumbers[currentMsg]);
      const nextMsg = msg[i + 1];
      indexNumbers[currentMsg + nextMsg] = Object.keys(indexNumbers).length + 1;
      i++;
    }
  }
  return output;
}
