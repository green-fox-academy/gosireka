
'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8, 7];

 function containsSeven (nums) {
  let out: string;
  if (nums.indexOf(7) === -1) {
    out = 'Noooooo';
  } else {
    out = 'Hoorray';
  }
  return out;
}

console.log(containsSeven(numbers)); 

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!


/* -----Different solution------

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8, 7];

function isSeven(element) {
  return (element === 7);
}

function containsAgain (nums) {
  let out: string;
  if (nums.some(isSeven)) {
    out = 'Hoorray';
  } else {
    out = 'Nooooo';
  }
  return out;
}

console.log(containsAgain(numbers)); 
*/
