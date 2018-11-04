'use strict'

export{}

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

let newList = numList.map(function (value) {
    if (value === 8) {
        return 4;
    } 
    return value;
  });

  console.log(newList[3]);
