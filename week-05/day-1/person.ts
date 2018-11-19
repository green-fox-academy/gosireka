export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this.name = name === undefined ? 'Jane Doe' : name;
    this.age = age === undefined ? 30 : age;
    this.gender = gender === undefined ? 'female' : gender;
  }
  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}
