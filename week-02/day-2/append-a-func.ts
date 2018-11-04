'use strict'

export{}

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string = 'Chinchill';
let plus: string = 'a';

function appendAFunc (word: string): string {
    return word.concat(plus);
}

console.log(appendAFunc(typo));
