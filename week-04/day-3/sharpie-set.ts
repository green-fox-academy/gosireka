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

  addSharpie(sharpie: Sharpie){
    this.sharpieSet.push(sharpie);
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
      if (this.sharpieSet[i].inkAmount === 0) {
        this.sharpieSet.splice(i, 1);
      }
    }
  }
}

function initializeSharpies(): Sharpie[] {
 return [
  new Sharpie('red', 2, 0),
  new Sharpie('blue', 2, 10),
  new Sharpie('yellow', 1.5),
  new Sharpie('green', 1.5, 0)
 ]
}

let sharpieSet= new SharpieSet;

for (let i = 0; i < initializeSharpies().length; i++) {
  sharpieSet.addSharpie(initializeSharpies()[i]);
}

console.log(sharpieSet);
console.log('-----------');

console.log('Usable: ', sharpieSet.countUsable());
console.log('-----------');

sharpieSet.removeTrash();
console.log(sharpieSet);

