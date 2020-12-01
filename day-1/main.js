const fs = require('fs');

function run() {
    const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).replace(/\r/g, '').split('\n');

    const possible = new Array();

    for (const entry1 of input) {
        for (const entry2 of input) {
            for (const entry3 of input) { // Added for part 2
                const first = parseInt(entry1);
                const second = parseInt(entry2);
                const third = parseInt(entry3); // Added for part 2

                if ((first + second + third /* added for part 2*/) === 2020) {
                    possible.push({ first: first, second: second, third: third /* added for part 2*/ });
                };
            };
        };
    };


    console.log(possible);
};


run();
