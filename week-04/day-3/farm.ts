import { Animal } from './animal';

/*
Reuse your Animal class
Create a Farm class
  it has list of Animals
  it has slots which defines the number of free places for animals
  breed() -> creates a new animal if there's place for it
  slaughter() -> removes the least hungry animal
*/

class Farm {
  animalList: Animal[] = [];
  slots: number = 1;

  constructor(animalArr: Animal[]) {
    this.animalList = animalArr;
  }

  breed() {
    if (this.slots > 0) {
      this.animalList.push(new Animal());
      this.slots--;
    } else {
      console.log('There is not any empty space')
    }
  }
  slaughter() {
    let shouldRemoveIndex: number = 0;
    for (let i = 0; i < this.animalList.length; i++) {
      if (this.animalList[i].hungerValue < this.animalList[shouldRemoveIndex].hungerValue) {
        shouldRemoveIndex = i;
      }
    }
    this.animalList.splice(shouldRemoveIndex, 1);
    this.slots++;
  }
}

function initializeAnimals(): Animal[] {
  let animalArr: Animal[] = [];
  animalArr.push(new Animal(20, 2));
  animalArr.push(new Animal(2, 10));
  animalArr.push(new Animal(1, 10));
  animalArr.push(new Animal(10, 0));
  return animalArr;
}

let animalArr = initializeAnimals();
let animalList = new Farm(animalArr);

console.log(animalList);
console.log('----------')
animalList.breed();
console.log(animalList);
console.log('----------')
animalList.breed();
console.log(animalList);
console.log('----------')
animalList.slaughter();
console.log(animalList);
