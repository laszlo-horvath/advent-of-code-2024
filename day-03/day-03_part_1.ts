import { readFileAsync } from "../utils/file.js";

const input = await readFileAsync('./03-input.txt');
// const input = `
// xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
// `;

const mulRegExp = /mul\(\d*,\d*\)/g;

const mulMatches = input.match(mulRegExp);
console.log('--- mulMatches:', mulMatches);

// mulMatches: [ 'mul(2,4)', 'mul(5,5)', 'mul(11,8)', 'mul(8,5))' ]

const result = mulMatches?.reduce((accumulator, currentMul) => {
  console.log('--- mul:', currentMul);
  const numberPairsRegExp = /\d*,\d*/g;
  const numberPairs = currentMul.match(numberPairsRegExp)?.toString();
  const numbers = numberPairs?.split(',').map(Number);
  console.log('--- numbers:', numbers);
  console.log('------------');

  return accumulator + (numbers as number[]).reduce((acc, num) => acc * num, 1);
}, 0);

console.log('--- Result:', result);