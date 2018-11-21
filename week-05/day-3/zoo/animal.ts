export { };

abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  constructor(name: string, age? : number){
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  abstract breed();
}

export class Bird extends Animal {
  hasWings: boolean = true;
  numberOfLegs: number = 2;
  breed(): string {
    return 'laying eggs';
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
