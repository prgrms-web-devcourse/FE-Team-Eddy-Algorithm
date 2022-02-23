const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  const sqrt = Math.sqrt(number);

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

function solution(n, k) {
  const numbers = n.toString(k).split("0");

  return numbers.filter(
    (number) => number !== "" && isPrime(parseInt(number, 10))
  ).length;
}
