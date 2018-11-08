'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indexes of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

function contains(searchedNum, num) {
  let searchedString = searchedNum.toString();
  let numString = num.toString();
  return numString.indexOf(searchedString);
}

function subint(searchedNum, list) {
  let indexes = [];
  for (let i = 0; i < list.length; i++) {
    if (contains(searchedNum, list[i]) !== -1) {
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