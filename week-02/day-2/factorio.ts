'use strict'

export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let givenNumber: number = 4;

function factorio(num: number): number {
    let fact: number = 1;
    for (let i:number = 1; i <= givenNumber; i++) {
        fact *=i;
    }
    return fact;
}

console.log(factorio(givenNumber));