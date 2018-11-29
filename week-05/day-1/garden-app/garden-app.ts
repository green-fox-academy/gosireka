import { Flower } from './flower';
import { Tree } from './tree';
import { Garden } from './garden';

let myGarden = new Garden();

myGarden.addTree(new Tree('purple'));
myGarden.addTree(new Tree('orange'));
myGarden.addFlower(new Flower('yellow'));
myGarden.addFlower(new Flower('blue'));

console.log(myGarden);

myGarden.getFlowers().forEach(function (actualFlower) {
  actualFlower.info();
});

myGarden.getTrees().forEach(function (actualFlower) {
  actualFlower.info();
});

myGarden.wateringGarden(40);

console.log('--------------');

myGarden.getFlowers().forEach(function (actualFlower) {
  actualFlower.info();
});

myGarden.getTrees().forEach(function (actualFlower) {
  actualFlower.info();
});

myGarden.wateringGarden(70);

console.log('--------------');

myGarden.getFlowers().forEach(function (actualFlower) {
  actualFlower.info();
});

myGarden.getTrees().forEach(function (actualFlower) {
  actualFlower.info();
});

console.log(myGarden);
