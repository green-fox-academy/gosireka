'use strict'

export{}

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let givenNumber: number = 6;


function sum (num : number){
    let sum: number = 0;
    for (let i: number= 0; i <= givenNumber; i++){
        sum += i;
    }
    return sum;
}

console.log(sum(givenNumber));