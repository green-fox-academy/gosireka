import { Flyable } from './flyable';

abstract class Vehicle {
  protected color: string;
  protected type: string;
  protected age: number;
  constructor(color: string, type: string, age: number) {
    this.color = color;
    this.type = type;
    this.age = age;
  }
  getColor(): string {
    return this.color;
  }
  getType(): string {
    return this.type;
  }
}

export class Helicopter extends Vehicle implements Flyable {
  land(): string {
    return 'The helicopter is landing';
  }
  fly(): string {
    return 'The helicopter is flying';
  }
  takeOff(): string {
    return 'The helicopter is taking off';
  }
}
