'use strict'

export{}

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList = [3, 4, 5, 6, 7];

/*function reverseArray (list){
    let reversedArray = list.reverse();
    return reversedArray;
}

console.log(reverseArray(numList));
*/


function secondReverse (list){
    let reversedArray = []; 
    let lastIndex = list.length-1;
    for (let i = 0; i < list.length; i++){
       reversedArray[i] = list[lastIndex - i];
    }
    return reversedArray;
}

console.log(secondReverse(numList));
