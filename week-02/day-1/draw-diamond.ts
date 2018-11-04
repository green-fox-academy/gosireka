'use strict'

export{}

let lineCount: number = 7;
let space: string = ' ';
let asterisk: string = '*'

for (let row: number= 0; row < lineCount; row++) {
    if (row < lineCount / 2) {
        let asteriskCount: number = 1 + row * 2;
        let spaceCount: number = (lineCount - asteriskCount) / 2 ;
        console.log(space.repeat(spaceCount) + asterisk.repeat(asteriskCount));
    } else {
        let asteriskCount: number = lineCount - (2 * (row - ((lineCount - 1) / 2)));
        let spaceCount: number = (lineCount - asteriskCount) / 2;
        console.log(space.repeat(spaceCount) + asterisk.repeat(asteriskCount));
    }
}

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is