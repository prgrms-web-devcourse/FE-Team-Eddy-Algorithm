function solution(files) {
  let number = "";
  const filesCopy = files;
  const alphabetSortedFiles = filesCopy.sort();
  const filesLength = alphabetSortedFiles.length;
  const numbers = [];

  let previousFileNameHead = "";
  const differentHeads = [];
  const sameHeads = [];

  for (let i = 0; i < filesLength; i++) {
    const fileName = alphabetSortedFiles[i];
    const currentFileName = fileName[0];

    if (previousFileNameHead === currentFileName) {
      const sameTarget = differentHeads.pop();

      sameTarget && sameHeads.push(sameTarget);
      sameHeads.push(fileName);
      continue;
    }

    differentHeads.push(fileName);
    previousFileNameHead = currentFileName;
  }

  for (let i = 0; i < filesLength; i++) {
    const fileName = alphabetSortedFiles[i];

    for (let j = 0; j < fileName.length; j++) {
      const text = fileName[j];
      const isNumber = !isNaN(text) && text !== " ";

      if (number !== "" && !isNumber) {
        break;
      }

      if (isNumber) {
        number += text;
      }
    }

    numbers.push(number);
    number = "";
  }

  const heads = [];
  const numbersLength = numbers.length;
  for (let i = 0; i < numbersLength; i++) {
    const number = numbers[i];
    heads.push(files[i].split(number)[0]);
  }

  const infos = [];
  for (let i = 0; i < numbersLength; i++) {
    const number = numbers[i];
    const head = files[i].split(number)[0];
    const tail = files[i].split(number)[1];

    heads.push(head);
    infos.push({
      number,
      head,
      tail,
      realHead: head.toUpperCase(),
      realNumber: parseInt(number, 10),
    });
  }

  const sortedByHead = infos.sort(
    (infoA, infoB) => infoA.realHead - infoB.realHead
  );

  const sortedInfos = sortedByHead.sort((infoA, infoB) => {
    if (infoA.head === infoB.head) {
      return infoA.realNumber - infoB.realNumber;
    } else {
      return infoA.head - infoB.head;
    }
  });

  const answer = sortedInfos.map(
    ({ number, head, tail }) => head + number + tail
  );

  return answer;
}
