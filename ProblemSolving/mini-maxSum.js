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

// Complete the miniMaxSum function below.

function miniMaxSum(arr) {
    if (arr.length !== 5) {
        return []
    } 
    let min = Math.floor(Math.random() * (10000) + 1000);
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let shortArr = []
        for (let j = 0; j < 4; j++) {
            shortArr.push(arr[(i+j) % arr.length])
        }
        let sum = shortArr.reduce((a, b) => a + b)
        if (sum < min) {
          min = sum
          shortArr = []
        } else if (sum > max) {
          max = sum;
          shortArr = []
        }
            
    }
    console.log(min, max)



}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
