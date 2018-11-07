'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(list){
  let newList = list.map(function (value){
    if (typeof value === "number"){
      value = 'Croissant';
    } else if (typeof value === "boolean"){
      value = 'Ice cream';
    } 
    return value;
  })
  return newList;
}

console.log(sweets(shopItems));

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"