'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indexes of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

function digitPartOf(searchedNum: number, num: number): boolean {
  let searchedString: string = searchedNum.toString();
  let numString: string = num.toString();
  return numString.indexOf(searchedString) !== -1;
}

function subint(searchedNum: number, list: number[]): number[]{
  let indexes: number[] = [];
  for (let i: number = 0; i < list.length; i++) {
    if (digitPartOf(searchedNum, list[i])) {
      indexes.push(list.indexOf(list[i]));
    }
  }
  return indexes;
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'