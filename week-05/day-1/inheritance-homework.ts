export { };

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    this.name = name === undefined ? 'Jane Doe' : name;
    this.age = age === undefined ? 30 : age;
    this.gender = gender === undefined ? 'female' : gender;
  }
  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}`);
  }
  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string) {
    super(name, age, gender);
    this.skippedDays = 0;
    this.previousOrganization = previousOrganization === undefined ? 'School of life' : previousOrganization;
  }
  getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }
  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }
  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this.level = level === undefined ? 'intermediate' : level;
  }
  getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }
  introduce(): void {
    console.log(`Hi I\'m ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;
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

//----Test input:----

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 1; i < 4; i++) {
  elon.hire();
}

for (let i = 1; i < 6; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
