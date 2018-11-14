import { Pirate } from './pirates';

class Ship {
  pirateList: Pirate[] = [];

  captain: Pirate;
  fillShip() {
    this.captain = new Pirate;
    let numberOfPirates = Math.floor(Math.random() * 10) + 1;
    for (let i: number = 0; i < numberOfPirates; i++) {
      this.addPirate(new Pirate);
    }
  }
  addPirate(pirate: Pirate) {
    this.pirateList.push(pirate);
  }
  giveInfo(): string {
    return `Captain drinked: ${this.captain.drinkCounter}, passed out: ${this.captain.passedOut}, is dead: ${this.captain.isDead}. Number of alive pirates: ${this.pirateList.length}`;
  }
  calculateAlivePirates() {
    let alivePirates: Pirate[] = [];
    this.pirateList.forEach(function (actualPirate) {
      if (!actualPirate.isDead) {
        alivePirates.push(actualPirate);
      }
    })
    return alivePirates;
  }
  battle(otherShip: Ship): boolean {
    let calculatedScore: number = this.calculateAlivePirates().length - this.captain.drinkCounter;
    let otherCalculatedScore: number = otherShip.calculateAlivePirates().length - otherShip.captain.drinkCounter;
    if (calculatedScore > otherCalculatedScore) {
      for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++){
        otherShip.pirateList[i].isDead = true;
      }
      return true;
    } else {
      for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++){
        this.pirateList[i].isDead = true;
      }
      return false;
    }
  }
  party(){
    
  }

}

let blackPearl = new Ship;

blackPearl.fillShip();

console.log(blackPearl.giveInfo());