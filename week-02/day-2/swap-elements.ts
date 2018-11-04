'use strict'

export{}

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"];

function swapElements(list) {
    let temp = list[0];
    list[0] = list[2];
    list[2] = temp;
    return list; 
}

console.log(swapElements(abc));
