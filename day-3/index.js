const { readFileSync } = require('fs');

const entries = readFileSync('./input.txt', 'utf8').trim().split('\n').map(s => s.trim());

const findRightAndBottom = (right = 3, bottom = 1) => {
    const lineLength = entries[0].length;
    const totalLength = entries.length;

    var indx = 0;
    var trees = 0;

    for (var x = 0; x < totalLength; x += bottom) {
        const char = entries[x][indx];

        if (char === "#") trees++;

        indx = (indx + right) % lineLength;
    }

    return trees;
};

const a = findRightAndBottom(1, 1); // for part 2
const b = findRightAndBottom(3, 1); // Part 1 & 2
const c = findRightAndBottom(5, 1); // for part 2
const d = findRightAndBottom(7, 1); // for part 2
const e = findRightAndBottom(1, 2); // for part 2

console.log(b); // for part 1

console.log(a * b * c * d * e); // for part 2
