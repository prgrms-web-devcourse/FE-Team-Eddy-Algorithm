function solution(s) {
  const bracketObj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  var answer = 0;
  if (s.length % 2 === 1) return 0;
  const sArr = s.split("");
  const copySArr = [...sArr];
  sArr.map((str) => {
    const stack = [];
    copySArr.shift();
    copySArr.push(str);
    copySArr.forEach((copyStr) => {
      if (stack.length === 0) stack.push(copyStr);
      else if (bracketObj[stack[stack.length - 1]] === copyStr) stack.pop();
      else if (copyStr === "(" || copyStr === "{" || copyStr === "[")
        stack.push(copyStr);
    });
    answer += stack.length === 0 ? 1 : 0;
  });
  return answer;
}
