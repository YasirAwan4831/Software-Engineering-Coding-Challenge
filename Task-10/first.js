'use strict';

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



process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

function main() {
    const responseTimesCount = parseInt(readLine().trim(), 10); // number of lines

    let responseTimes = [];

    for (let i = 0; i < responseTimesCount; i++) {
        const responseTimesItem = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }

    const result = countResponseTimeRegressions(responseTimes); //   function call

    process.stdout.write(result + '\n'); // output print
}

function main() {
    const responseTimesCount = parseInt(readLine().trim(), 10);

    let responseTimes = [];

    for (let i = 0; i < responseTimesCount; i++) {
        const responseTimesItem = parseInt(readLine().trim(), 10);
        responseTimes.push(responseTimesItem);
    }

    const result = countResponseTimeRegressions(responseTimes);

    process.stdout.write(result + '\n');
}
