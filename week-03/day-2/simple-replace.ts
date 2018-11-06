'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let re = /dishwasher/gm;
example = example.replace(re, "galaxy");

console.log(example);

export = example;