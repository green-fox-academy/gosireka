export abstract class Aircraft {
  protected amountOfAmmo: number;
  protected type: string;
  protected maxAmmo: number;
  protected baseDamage: number;

  constructor(type: string, maxAmmo: number, baseDamage: number) {
    this.type = type;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.amountOfAmmo = 0;
  }
  fight(): number {
    let damage: number = this.baseDamage * this.amountOfAmmo;
    this.amountOfAmmo = 0;
    return damage;
  }
  refill(plusAmmo: number): number {
    let canTake: number = this.maxAmmo - this.amountOfAmmo;
    if (plusAmmo <= canTake) {
      this.amountOfAmmo += plusAmmo;
    } else {
      this.amountOfAmmo += canTake;
    }
    return plusAmmo - canTake;
  }
  getType(): string {
    return this.type;
  }
  getAmountOfAmmo(): number {
    return this.amountOfAmmo;
  }
  setAmountOfAmmo(newAmount: number) {
    this.amountOfAmmo = newAmount;
  }
  getMaxAmmo(): number {
    return this.maxAmmo;
  }
  getStatus(): string {
    return `Type: ${this.type}, Ammo: ${this.amountOfAmmo}, Base Damage: ${this.baseDamage}, All Damage:${this.baseDamage * this.amountOfAmmo} ${'\n'}`;
  }
  abstract isPriority(): boolean;
}

export class F16 extends Aircraft {
  constructor() {
    super('F16', 8, 30);
  }
  isPriority(): boolean {
    return false;
  }
}

export class F35 extends Aircraft {
  constructor() {
    super('F35', 12, 50);
  }
  isPriority(): boolean {
    return true;
  }
}
