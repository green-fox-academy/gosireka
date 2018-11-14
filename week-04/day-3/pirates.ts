export class Pirate {
  drinkCounter: number = 0;
  passedOut: boolean = false;
  isDead: boolean = false;
  drinkSomeRum() {
    if (!this.isDead) {
      this.drinkCounter++;
    } else {
      console.log('He is dead!');
    }
  }
  howsItGoingMate() {
    if (this.drinkCounter < 5 && !this.isDead) {
      console.log('Pour me anudder!');
    } else if (!this.isDead) {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.passedOut = true;
    } else {
      console.log('He is dead!');
    }
  }
  die() {
    this.isDead = true;
  }
  brawl(pirate: Pirate) {
    if(!pirate.isDead){
      let whoDies: number = Math.floor(Math.random() * 3) + 1;
      console.log('the random number: ', whoDies);
      if(whoDies === 1){
        this.isDead = true;
      } else if(whoDies === 2){
        pirate.isDead = true;
      } else {
        this.isDead = true;
        pirate.isDead = true;
      }
      
    }
  }
}

let jackSparrow = new Pirate;

let pirate2 = new Pirate;

//jackSparrow.brawl(pirate2);
//console.log(jackSparrow);
//console.log('---------');
//console.log(pirate2);


