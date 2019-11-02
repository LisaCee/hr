'use strict';

const fs = require('fs');

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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let cache = {}

    for (let id of arr) {
      if (cache[id]) {
        cache[id]++
      } else {
        cache[id] = 1
      }
    }

  let array = []
  for (let id in cache) {
    array.push([id, cache[id]])
  }

  array.sort((a, b) => {
    return a[1] - b[1]
  })  
    if (array[array.length - 1][1] === array[array.length - 2][1]) {
        return array[array.length - 2][0]
    }
  return array[array.length - 1][0]


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
