'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', (chunk: string): void => {
    inputString += chunk;
});

process.stdin.on('end', (): void => {
    inputLines = inputString.split(/\r?\n/).map(line => line.trim());
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Function to calculate sum of multiples of 3 or 5 below n
function sumMultiples(n: number): number {
    let sum: number = 0;
    for (let i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function main(): void {
    const t: number = parseInt(readLine(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine(), 10);
        console.log(sumMultiples(n));
    }
}