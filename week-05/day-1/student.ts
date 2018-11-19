import { Person } from './person';

export class Student extends Person {
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender);
    this.skippedDays = 0;
    this.previousOrganization = previousOrganization === undefined ? 'School of life' : previousOrganization;
  }
  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }
  introduce() {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}
