'use strict';

export { }

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(firstArr: string[], secondArr: string[]): string[] {
  let mixedArr : string[] = [];
  for (let i: number = 0; i < firstArr.length; i++) {
    mixedArr.push(firstArr[i]);
    mixedArr.push(secondArr[i]);
  }
  return mixedArr;
}

console.log(makingMatches(girls, boys));
