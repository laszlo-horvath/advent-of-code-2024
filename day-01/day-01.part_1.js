import { readFileAsync } from "../utils/file.js";

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

console.log('--- 1st list:', firstList);
console.log('--- 2nd list:', secondList);

firstList.sort((a, b) => a - b);
secondList.sort((a, b) => a - b);

console.log('--- 1st list sorted:', firstList);
console.log('--- 2nd list sorted:', secondList);

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
