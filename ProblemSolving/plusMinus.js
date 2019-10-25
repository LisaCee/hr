'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zeroes = 0;

    arr.forEach((num) => {
        if (num < 0) {
            neg += 1
        } else if (num > 0) {
            pos += 1
        } else {
            zeroes += 1
        }
    })

    console.log((pos/arr.length).toPrecision(6))
    console.log((neg/arr.length).toPrecision(6))
    console.log((zeroes/arr.length).toPrecision(6))

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}