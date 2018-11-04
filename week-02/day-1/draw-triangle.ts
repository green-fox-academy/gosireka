'use strict';

let lineCount: number = 4;
let star: string = '*';

for (let i: number = 1; i <= lineCount; i++) {
  console.log(star.repeat(i));
}

/* alternative solution

let lineCount: number = 4;
let asterisk: string = ' ';

for (let i: number = 1; i <= lineCount; i++) {
    asterisk += '*';
    console.log(asterisk);
}

*/

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is