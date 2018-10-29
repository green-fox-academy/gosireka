'use strict';

let lineCount: number = 8;
let space: string = ' ';
let percentageLine: string = '% % % %';

for(let i: number = 1; i <=lineCount; i++){
    if(i % 2 !== 0){
        console.log(percentageLine);
    }else{
        console.log(space + percentageLine);
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