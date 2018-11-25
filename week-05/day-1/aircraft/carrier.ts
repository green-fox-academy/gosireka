import { Aircraft } from './aircraft';

export class AircraftCarrier {
  private aircrafts: Aircraft[] = [];
  private storeOfAmmo: number;
  private healthPoint: number;
  private allDamage: number;

  constructor(initialAmmo: number, healthPoint: number) {
    this.storeOfAmmo = initialAmmo;
    this.healthPoint = healthPoint;
    this.allDamage = 0;
  }

  add(newAircraft: Aircraft): void {
    this.aircrafts.push(newAircraft);
  }

  fill(): void {
    if (this.storeOfAmmo === 0) {
      throw 'The ammo store is empty, fill method was not successful!';
    }
    let sortedbyNeeds: Aircraft[] = this.aircrafts.sort(function (a, b) {
      return a.getAmountOfAmmo() - b.getAmountOfAmmo();
    });
    sortedbyNeeds.forEach(aircraft => {
      let needs: number = aircraft.getMaxAmmo() - aircraft.getAmountOfAmmo();
      if (needs <= this.storeOfAmmo) {
        aircraft.setAmountOfAmmo(aircraft.getAmountOfAmmo() + needs);
        this.storeOfAmmo -= needs;
      } else {
        aircraft.setAmountOfAmmo(aircraft.getAmountOfAmmo() + this.storeOfAmmo);
        this.storeOfAmmo = 0;
      }
    });
  }

  fight(enemyCarrier: AircraftCarrier): void {
    this.aircrafts.forEach(aircraft => {
      this.allDamage += aircraft.fight();
    });
    enemyCarrier.healthPoint -= this.allDamage;
  }

  getStatus(): string {
    let aircraftsStatus: string = '';
    this.aircrafts.forEach(aircraft => {
      aircraftsStatus = aircraftsStatus.concat(aircraft.getStatus())
    });
    if (this.healthPoint <= 0) {
      return 'It\'s dead Jim :(';
    } else {
      return `HP: ${this.healthPoint}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, 
      Total damage: ${this.allDamage} ${'\n'}Aircrafts: ${'\n'}${aircraftsStatus}`;
    }
  }
}
