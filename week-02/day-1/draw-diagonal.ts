'use strict';

export{}

let lineCount: number = 12;
let percentage: string = '%';
let space: string = ' ';

for (let i: number = 0; i < lineCount; i++) {
  if (i === 0 || i === lineCount-1){
    console.log(percentage.repeat(lineCount-1));
  }else if (i === lineCount-2){
    console.log(percentage + space.repeat(i-1) + percentage)
  }else{
    console.log(percentage + space.repeat(i-1) + percentage + space.repeat(lineCount-3-i) + percentage);
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
