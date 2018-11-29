export abstract class Plant {
  protected waterAmount: number;
  protected color: string;
  protected needWater: boolean;
  protected type: string;

  constructor(color: string) {
    this.color = color;
    this.waterAmount = 0;
    this.needWater = true;
  }
  getNeedWater(): string {
    if (this.needWater === true) {
      return 'needs water';
    } else {
      return 'does not need water';
    }
  }
  watering(amount: number): void {
    if (this.needWater) {
      this.waterAmount += amount;
    } else {
      console.log('The plant does not need water')
    }
  }
  info(): void {
    console.log(`The ${this.color} ${this.type} ${this.getNeedWater()}`);
  }
}
