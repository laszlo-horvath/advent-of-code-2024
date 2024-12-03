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

const similarityScores = [];
for (let index = 0; index < firstList.length; index++) {
  const similarty = secondList.filter((value) => value === firstList[index]).length;
  const similarityScore = firstList[index] * similarty;
  similarityScores.push(similarityScore);
}
console.log('--- similarityScores:', similarityScores);

const similarityScoresSummary = similarityScores.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log('--- similarityScoresSummary:', similarityScoresSummary);
