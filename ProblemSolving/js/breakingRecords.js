'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let high = scores[0];
    let low = scores[0];
    let hiLow = [0, 0] 
    let lowest = 0;
    let highest = 0;

    for (let i = 0; i < scores.length; i++){
        if (scores[i] < low) {
            low = scores[i];
            hiLow[1] += 1
        } else if (scores[i] > high) {
            high = scores[i];
            hiLow[0] += 1
        }
    }
    return hiLow

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
