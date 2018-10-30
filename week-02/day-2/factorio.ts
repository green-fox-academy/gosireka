'use strict'

export{}

// -  Create a function called `factorio`
//    that returns it's input's factorial

let givenNumber = 6;


function factorio(num: number){
    let fact: number = 1;
    for(let i:number = 1; i <=givenNumber; i++){
        fact *=i;
    }
    return fact;
}

console.log(factorio(givenNumber));