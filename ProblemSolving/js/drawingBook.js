'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
   let frontToMidTarget = p/2
    let backtoMidTarget = n/2 - frontToMidTarget;
    if (p === 1 || p === n) {
        return 0
    }
     if (n % 2 === 0 && n - 1 === p) {
        return Math.floor(Math.min(frontToMidTarget, backtoMidTarget) + 1)
    } else {

    return Math.floor(Math.min(frontToMidTarget, backtoMidTarget))
    } 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
