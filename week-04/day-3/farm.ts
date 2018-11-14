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

  addAnimal(animal: Animal) {
    this.animalList.push(animal);
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
  return [
    new Animal(20, 2),
    new Animal(2, 10),
    new Animal(1, 10),
    new Animal(10, 0)
  ]
}

let animalList = new Farm;

for (let i = 0; i < initializeAnimals().length; i++) {
  animalList.addAnimal(initializeAnimals()[i]);
}

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
