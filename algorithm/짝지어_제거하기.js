function solution(s) {
  let wordArray = s.split("");
  let stack = [];
  wordArray.forEach((char) => {
    stack.length == 0 || stack[stack.length - 1] !== char
      ? stack.push(char)
      : stack.pop();
  });
  if (stack.length) return 0;
  return 1;
}
