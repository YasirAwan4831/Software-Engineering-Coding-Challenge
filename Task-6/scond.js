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

// ================= Your function =================
function mergeHighDefinitionIntervals(intervals) {
    if (intervals.length === 0) return [];

    // Step 1: sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    // Step 2: merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
        let last = merged[merged.length - 1];
        let current = intervals[i];

        if (current[0] <= last[1]) {
            // merge
            last[1] = Math.max(last[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

// ================= Main function =================
function main() {
    const intervalsRows = parseInt(readLine().trim(), 10);
    const intervalsColumns = parseInt(readLine().trim(), 10); // not really needed

    let intervals = Array(intervalsRows);

    for (let i = 0; i < intervalsRows; i++) {
        intervals[i] = readLine()
            .trim()
            .split(' ')
            .map(Number);
    }

    const result = mergeHighDefinitionIntervals(intervals);

    // Print result
    process.stdout.write(result.map(x => x.join(' ')).join('\n') + '\n');
}