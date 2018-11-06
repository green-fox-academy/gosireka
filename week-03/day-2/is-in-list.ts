'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let search: number[] = [4, 8, 12, 16];
let checkList: number[] = [];

function checkNums(list, search) {
  for (let i = 0; i < search.length; i++) {
    if (list.indexOf(search[i]) !== -1 ) {
      checkList.push(search[i]);
    } 
  }
  return (checkList.length === search.length);
}

console.log(checkNums(listOfNumbers, search));
