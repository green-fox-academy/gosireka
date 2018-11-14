/*
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies
*/

import { Sharpie } from './sharpie';

class SharpieSet {
  sharpieSet: Sharpie[] = [];

  constructor(sharpieArr: Sharpie[]){
    this.sharpieSet = sharpieArr;
  }

  countUsable(): number {
    let counter: number = 0;
    for (let i: number = 0; i < this.sharpieSet.length; i++) {
      if (this.sharpieSet[i].inkAmount !== 0) {
        counter++;
      }
    }
    return counter;
  }
  removeTrash(): void {
    for (let i: number = 0; i < this.sharpieSet.length; i++) {
      if(this.sharpieSet[i].inkAmount === 0){
        this.sharpieSet.splice(i, 1);
      }
    }
  }
}

function initializeSharpies(): Sharpie [] {
  let sharpieArr: Sharpie[] = [];
  sharpieArr.push(new Sharpie('red', 2, 0));
  sharpieArr.push(new Sharpie('blue', 2, 10));
  sharpieArr.push(new Sharpie('yellow', 1.5));
  sharpieArr.push(new Sharpie('green', 1.5, 0));
  return sharpieArr;
}

let sharpieArr = initializeSharpies();
let sharpieSet = new SharpieSet(sharpieArr);

console.log(sharpieSet);
console.log('-----------');

console.log('Usable: ', sharpieSet.countUsable());
console.log('-----------');

sharpieSet.removeTrash();
console.log(sharpieSet);

