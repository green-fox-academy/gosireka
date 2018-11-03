'use strict'

export{}

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr:number []) {
    let uniqueArray: number[] = [];
    for(let i: number = 0; i < arr.length; i++) {
        let actualElement: number = arr[i];
        if(uniqueArray.indexOf(actualElement) == -1) {
            uniqueArray.push(actualElement);
        }
    }
    return uniqueArray;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`