import { readFileAsync } from "./utils/file.js";

const input = await readFileAsync('./02-input.txt');

// read input per line
const reports = input.trim().split('\n');

const map = {
  'safe': {},
  'unsafe': {},
};

reports.forEach((report, i) => {
  console.log(`Report ${i + 1}: ${report}`);

  let direction;
  let safeReport = true;
  const levels = report.split(' ').map(Number);

  for(let index = 0; index < levels.length; index++) {
    console.log('Level ', index, levels[index]);

    const prev = levels[index - 1];
    const current = levels[index];
    const next = levels[index + 1];
    if (current === next) {
      console.log(`The levels are not either all increasing or all decreasing.`);
      map.unsafe[i] = report;
      safeReport = false;
      break;
    }

    let diff;
    if (prev < current || current < next) {
      direction = 'increasing';

      diff = next - current;
    } else if (prev > current || current > next) {
      direction = 'decreasing';

      diff = current - next;
    }

    // Any two adjacent levels differ by at least one and at most three
    if (diff < 1 || diff > 3) {
      console.log(`Any two adjacent levels differ by at least one and at most three.`);
      map.unsafe[i] = report;
      safeReport = false;
      break;
    }

    // The levels are either all increasing
    if (direction === 'increasing') {
      if (prev > current || current > next) {
        console.log(`The levels are not either all increasing or all decreasing.`);
        map.unsafe[i] = report;
        safeReport = false;
        break;
      }
    }
    // The levels are either all decreasing
    else if (direction === 'decreasing') {
      if (prev < current && current < next) {
        console.log(`Safe report`);
        map.unsafe[i] = report;
        safeReport = false;
        break;
      }
    }
  }

  if (safeReport) {
    map.safe[i] = report;
  }
});

console.log(map);
console.log('Safe reports', Object.keys(map.safe).length);
console.log('Unsafe reports', Object.keys(map.unsafe).length);
