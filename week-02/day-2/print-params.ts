'use strict'

export{}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams (...theArgs) {
    console.log(arguments);
}

printParams ('green', 'cat', 23);
