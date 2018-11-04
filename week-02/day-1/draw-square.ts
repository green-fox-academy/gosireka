'use strict';

export{}

let lineCount: number = 6;
let percentage: string = '%';
let space: string = ' ';

for (let actualRow: number = 0; actualRow < lineCount; actualRow++) {
    if (actualRow === 0 || actualRow === lineCount -1) {
        let row = percentage.repeat(lineCount);
        console.log(row);
    } else {
        let row = percentage + space.repeat(lineCount - 2) + percentage;
        console.log(row);
    }
}

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
