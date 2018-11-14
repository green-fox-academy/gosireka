import { stat } from "fs";

/*
Create a Station and a Car classes
Station
  gasAmount
  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
  gasAmount
  capacity
  create constructor for Car where:
    initialize gasAmount -> 0
    initialize capacity -> 100
*/

class Station {
  gasAmount: number;
  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }
  refill(car: Car) {
    this.gasAmount--;
    car.gasAmount++;
  }
}

class Car {
  gasAmount: number;
  capacity: number;
  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

function initializeCars(): Car[] {
  let carArr: Car[] = [];
  carArr.push(new Car(10, 60));
  carArr.push(new Car(6, 90));
  carArr.push(new Car());
  return carArr;
}
let carArr = initializeCars();
let station = new Station(100);

console.log(carArr);
console.log('-------------');

carArr.forEach(function (actualCar) {
  if (actualCar.capacity - actualCar.gasAmount <= station.gasAmount) {
    while (actualCar.gasAmount < actualCar.capacity) {
      station.refill(actualCar)
    }
    console.log('remained gas in the station: ' + station.gasAmount);
  } else {
    while (actualCar.capacity - actualCar.gasAmount > station.gasAmount && station.gasAmount !== 0) {
      station.refill(actualCar)
    }
    console.log('remained gas in the station: ' + station.gasAmount);
  }
})

console.log(carArr);
