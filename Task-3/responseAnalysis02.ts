'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'countResponseTimeRegressions' function below.
 */

function countResponseTimeRegressions(responseTimes: number[]): number {
    let count = 0;

    // loop start from second element
    for (let i = 1; i < responseTimes.length; i++) {

        // check if current value is greater than previous
        if (responseTimes[i] > responseTimes[i - 1]) {
            count++;
        }
    }

    return count;
}

function main() {
    const responseTimesCount: number = parseInt(readLine().trim(), 10);

    let responseTimes: number[] = [];

    for (let i: number = 0; i < responseTimesCount; i++) {
        const responseTimesItem: number = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }

    const result: number = countResponseTimeRegressions(responseTimes);

    process.stdout.write(result + '\n');
}