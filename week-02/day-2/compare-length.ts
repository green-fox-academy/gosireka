'use strict'

export{}

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList = [1, 2, 3];
let secondList = [4, 5];

if (secondList.length > firstList.length){
    console.log("the second list has " + (secondList.length - firstList.length) + " more element(s)");
}else if (secondList.length < firstList.length){
    console.log("the first list has " + (firstList.length - secondList.length) + " more elements");
}else{
    console.log("the two list have equal elements:  " + firstList.length);
}