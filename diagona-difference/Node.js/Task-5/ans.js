'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'kFactorization' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY A
 */


function kFactorization(n, A) {
    A.sort((a, b) => a - b);

    let queue = [1];
    let visited = new Set();
    let parent = new Map();

    visited.add(1);
    parent.set(1, null);

    while (queue.length > 0) {
        let current = queue.shift();

        for (let factor of A) {
            let next = current * factor;

            if (next > n) continue;

            if (!visited.has(next)) {
                visited.add(next);
                parent.set(next, current);

                if (next === n) {
                    // reconstruct path
                    let path = [];
                    let temp = n;

                    while (temp !== null) {
                        path.push(temp);
                        temp = parent.get(temp);
                    }

                    return path.reverse();
                }

                queue.push(next);
            }
        }
    }

    return [-1];
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const result = kFactorization(n, A);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
