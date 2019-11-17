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
   let turns = 0;
    if (p > n) {return null}
    if (p == 1 || p == n) {return 0}

    
    if (n % 2 === 0) {
      // even number of pages, single page at end
      if (p <= n/2) {
        // start at front
      for (let i = 2; i <= p; i+=2) {
        turns += 1
      }
    } // start at end
    else if (p >= n/2) {
        for (let i = n; i <= p; i+=2) {
            turns += 1
        }
    }


    } else {
      // odd number of pages, double page at end
      if (p === n - 1) {
        // if it's within last 2 pages
        return 0;
      }
      if (p <= n/2) {
        // start at beginning
        for (let i = 2; i <= p; i+=2) {
          turns += 1
        }
      }
        else if (p >= n/2) {
         for (let i = p; i <= n-2; i+=2) {
            turns += 1
        }
      }
    }
    return turns;

    // return Math.floor(Math.min(p/2, n/2-p/2))
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
