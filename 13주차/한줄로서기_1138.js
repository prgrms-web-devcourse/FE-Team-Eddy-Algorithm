let fs = require('fs');
let input = fs.readFileSync('_input.txt').toString().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const info = input[1].split(' ');
const result = new Array(count).fill(0);

info.forEach((v, i) => {
  let location = Number(v);
  
  while (location < count) {
    const empty = result.reduce((acc, element, index) => {
      index < location && !element && acc++;
      return acc;
    }, 0);

    if (!result[location] && empty === Number(v)) {
      result[location] = i + 1;
      break;
    } 
    location++;
  }
});

console.log(result.join(' '));