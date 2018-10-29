'use strict';

let lineCount: number = 8;
let space: string = ' ';
let percentage: string = '% ';

for(let i: number = 1; i <=lineCount; i++){
    if(i % 2 !== 0){
        console.log(percentage.repeat(lineCount/2));
    }else{
        console.log(space + percentage.repeat(lineCount/2));
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