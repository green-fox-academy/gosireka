export class Plant {
  protected waterAmount: number;
  protected color: string;
  protected needWater: boolean;
  protected type: string;

  constructor(color: string, type: string = 'unknown') {
    this.color = color;
    this.type = type;
    this.waterAmount = 0;
    this.needWater = true;
  }
  getNeedWater(): string{
    if(this.needWater === true){
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
  info(){
    console.log(`The ${this.color} ${this.type} ${this.getNeedWater()}`);
  }
}
