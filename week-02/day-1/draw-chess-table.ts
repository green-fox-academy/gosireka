'use strict';

let lineCount: number = 8;
let space: string = ' ';
let percentage: string = '%';
let spaceAndPercent: string = percentage.concat(space);

let row: string = spaceAndPercent.repeat(lineCount/2);

for (let i: number = 0; i < lineCount; i++) {
    if (i % 2 === 0) {
        console.log(row);
    } else {
        console.log(space + row);
    }
}

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//