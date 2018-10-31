'use strict';

export{}

let lineCount: number = 6;
let percentage: string = '%';
let maxSpace: string = '    ';

for (let i: number = 1; i <= lineCount; i++){
    if( i === 1 || i === lineCount){
        console.log(percentage.repeat(lineCount));
    }else{
        console.log(percentage + maxSpace + percentage);
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
