function solution(s) {
  const length = s.length;

  const stack = [];
  for (let i = 0; i < length; i++) {
    const word = s[i];

    const top = stack.pop();

    if (word === top) {
      continue;
    }

    if (!top) {
      stack.push(word);
      continue;
    }
    stack.push(top);
    stack.push(word);
  }

  return stack.length === 0 ? 1 : 0;
}
