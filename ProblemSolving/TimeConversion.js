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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let array = s.split(':');
    array[2] = parseInt(array[2])
    if (s.includes('PM')) {
        array[0] = parseInt(array[0]) + 12
        array[0] = array[0].toString().padStart(2, '0')
        array[1] = array[1].toString().padStart(2, '0')
        return array.join(':')
    } else if (s.includes('AM') && array[0] == 12)  {
        array[0] = parseInt(array[0]) -12;
        array[0] = array[0].toString().padStart(2, '0')
        array[1] = array[1].toString().padStart(2, '0')
        return array.join(':')
    }
        else {
        return s[-2]
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
