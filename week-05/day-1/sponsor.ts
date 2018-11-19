import { Person } from './person';

export class Sponsor extends Person {
  protected company: string;
  protected hiredStudents: number;
  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this.hiredStudents = 0;
    this.company = company === undefined ? 'Google' : company;
  }
  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }
  hire(): void {
    this.hiredStudents++;
  }
  getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

}
