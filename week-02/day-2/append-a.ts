'use strict'

export{}

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];

let char = 'a';

let newAnimals = animals.map(function(value) {
        value += char;
        return value;
})

console.log(newAnimals);
