import { Plant } from './plant';

export class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this.type = 'Flower';
  }
  
  watering(amount: number): void {
     if (this.needWater === true && this.waterAmount < 5) {
      this.waterAmount += amount * 0.75;
      this.needWater = this.checkNeed();
    } else {
      this.needWater === false;
    }
  }

  checkNeed(): boolean{
    if(this.waterAmount < 5){
      return true;
    } else {
      return false;
    }
  }
}
