import { Instrument } from './instruments';

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound();
  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} `);
  }
}

export class ElectricGuitar extends StringedInstrument {
  name = 'Electric Guitar';
  constructor(stringNumber: number = 6) {
    super();
    this.numberOfStrings = stringNumber;
  }
  sound() {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {
  name = 'Bass Guitar';
  constructor(stringNumber: number = 4) {
    super();
    this.numberOfStrings = stringNumber;
  }
  sound() {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {
  name = 'Violin';
  constructor(stringNumber: number = 4) {
    super();
    this.numberOfStrings = stringNumber;
  }
  sound() {
    return 'Screech';
  }
}
