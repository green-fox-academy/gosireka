'use strict'

export{}
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];

let zero: string = '0 ';
let one: string = '1 ';

let givenNumber = 7;

function drawMatrix (number: number) {
    for(let i: number = 0; i < number; i++) {
        matrix[i]= [zero.repeat(number - 1 - i) + one + zero.repeat(i)];
    }
    return matrix;
}

drawMatrix(givenNumber);

console.log(matrix);