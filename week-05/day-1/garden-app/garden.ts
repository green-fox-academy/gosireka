import { Flower } from './flower';
import { Tree } from './tree';

export class Garden {
  private flowers: Flower[];
  private trees: Tree[];
  private plants: Flower[] | Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
    this.plants = [];
  }
  addTree(tree: Tree): void {
    this.trees.push(tree);
    this.plants.push(tree);
  }
  addFlower(flower: Flower): void {
    this.flowers.push(flower);
    this.plants.push(flower);
  }
  getFlowers(): Flower[] {
    return this.flowers;
  }
  getTrees(): Tree[] {
    return this.trees;
  }
  wateringGarden(amount: number): void {
    this.plants.forEach(actualPlant => {
      actualPlant.watering(amount / this.plants.length);
    })
  }
}
