'use strict';

export{}

let lineCount: number = 6;
let symbol: string = '%';
let space: string = ' ';

for (let actualRow: number = 0; actualRow < lineCount; actualRow++) {
  if (actualRow === 0 || actualRow === lineCount - 1) {
    let row: string = symbol.repeat(lineCount);
    console.log(row);
  } else {
    let row: string = symbol + space.repeat(actualRow - 1) + symbol + space.repeat(lineCount - 3 -(actualRow-1)) + symbol;
    console.log(row);
  }
}

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
