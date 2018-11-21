export { };
import { Flyable } from './flyable';

abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }
  abstract breed(): void;
}

export class Bird extends Animal implements Flyable {
  hasWings: boolean = true;
  numberOfLegs: number = 2;
  breed(): string {
    return 'laying eggs';
  }
  takeOff(): string {
    return 'The bird is taking off';
  }
  fly(): string {
    return 'The bird is flying';
  }
  land(): string {
    return 'The bird is landing';
  }
}

export class Mammal extends Animal {
  numberOfEyes: number = 2;
  breed(): string {
    return 'pushing miniature versions out';
  }
}

export class Reptile extends Animal {
  numberOfLegs: number = 4;
  breed(): string {
    return 'laying eggs';
  }
}
