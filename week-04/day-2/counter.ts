/*
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value
*/

class Counter {
  integer: number = 0;

  constructor(integer: number) {
    this.integer = Math.round(integer);
  }

  add(number: number = 1): void {
    this.integer += number;
  }
  get(): string {
    return this.integer.toString();
  }
  reset(): void {
    this.integer = 0;
  }
}

let exampleCounter = new Counter(400);
//check 
exampleCounter.add(3);
console.log(exampleCounter.get());
console.log(exampleCounter.integer);
exampleCounter.reset();
console.log(exampleCounter.integer);
