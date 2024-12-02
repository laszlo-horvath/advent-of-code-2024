import { readFileAsync } from "./utils/file.js";

const exampleInput = await readFileAsync('./01-input.txt');

let firstList = [];
let secondList = [];

exampleInput.split('\n')
  .filter(Boolean)
  .forEach((line) => {
    const [x, y] = line.split('   ').map(Number);

    firstList.push(x);
    secondList.push(y);
  });
// console.log('--- listChanged:', listChanged);
console.log('--- 1:', firstList);
console.log('--- 2:', secondList);

firstList.sort((a, b) => a - b);
secondList.sort((a, b) => a - b);

console.log('--- firstList:', firstList);
console.log('--- secondList:', secondList);

const distances = [];
for (let index = 0; index < firstList.length; index++) {
  const distance = Math.abs(firstList[index] - secondList[index]);
  distances.push(distance);
}
console.log('--- distances:', distances);

const distancesSummary = distances.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log('--- distancesSummary:', distancesSummary);
