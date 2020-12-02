const { readFileSync } = require('fs');

const entries = readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').map(String);

var possible1 = new Array();
var possible2 = new Array();


// === First Part ===
for (var x = 0; x < entries.length; x++) {
    const entry = entries[x].trim().split(' ');

    const min = entry[0].split('-')[0];
    const max = entry[0].split('-')[1];
    const char = entry[1].slice(0, 1);

    const re = new RegExp(`[^${char}]`, 'g');
    const length = entry[2].replace(re, '').length;

    if (length <= max && length >= min) possible1.push(entry[2])
}

// === Second Part ===
for (var x = 0; x < entries.length; x++) {
    const entry = entries[x].trim().split(' ');

    const pairs = entry[0].split('-').map(i => entry[2][i - 1]);
    const char = entry[1].slice(0, 1);

    if (pairs.filter((s) => s === char).length === 1) possible2.push(entry)
}

console.log(possible1.length, possible2.length)
