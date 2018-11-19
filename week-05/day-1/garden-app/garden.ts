import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  protected flowers: Flower[];
  protected trees: Tree[];
  protected plants: Flower[] | Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
    this.plants = [];
  }
  addTree(tree: Tree) {
    this.trees.push(tree);
    this.plants.push(tree);
  }
  addFlower(flower: Flower) {
    this.flowers.push(flower);
    this.plants.push(flower);
  }
  getFlowers() {
    return this.flowers;
  }
  getTrees() {
    return this.trees;
  }
  wateringGarden(amount: number): void {
    this.plants.forEach(actualPlant => {
      actualPlant.watering(amount / this.plants.length);
    })
  }
}
