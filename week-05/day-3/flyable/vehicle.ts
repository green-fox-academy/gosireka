import {Flyable} from './flyable';

abstract class Vehicle {
  protected color: string;
  protected type: string;
  protected age: number;
  constructor(color: string, type: string, age: number){
    this.color = color;
    this.type = type;
    this.age = age;
  }
  getColor(){
    return this.color;
  }
  getType(){
    return this.type;
  }
}

export class Helicopter extends Vehicle implements Flyable{
  land(){
    return 'The helicopter is landing';
  }
  fly(){
    return 'The helicopter is flying';
  }
  takeOff(){
    return 'The helicopter is taking off';
  }
}
