import { Plant } from './plant';
export class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'Tree';
  }
  watering(amount: number): void {
    if (this.needWater === true && this.waterAmount < 10) {
      this.waterAmount += amount * 0.4;
      this.needWater = this.checkNeed();
    } else {
      this.needWater === false;
      console.log('This tree does not need water');
    }

  }
  checkNeed(): boolean {
    if (this.waterAmount < 10) {
      return true;
    } else {
      return false;
    }
  }
}
