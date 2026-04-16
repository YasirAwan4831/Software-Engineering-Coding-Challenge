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

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Sort the array to easily find min and max
    arr.sort((a, b) => a - b);
    
    let minSum = 0;
    let maxSum = 0;
    
    // Minimum sum = sum of first 4 smallest numbers
    for(let i = 0; i < 4; i++) {
        minSum += arr[i];
    }
    
    // Maximum sum = sum of last 4 largest numbers
    for(let i = 1; i < 5; i++) {
        maxSum += arr[i];
    }
    
    console.log(minSum + " " + maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}