/*
Create Student and Teacher classes
Student
  learn()
  question(teacher) -> calls the teachers answer method
Teacher
  teach(student) -> calls the students learn method
  answer()
*/

class Student {
  learnedThings: number = 0;
  questionNumbers: number;
  name: string;

  constructor(name: string, questionNumbers: number) {
    this.name = name;
    this.questionNumbers = questionNumbers;
  }

  learn(): void {
    this.learnedThings++;
  }
  question(teacher: Teacher): void {
    teacher.answear(this);
  }
}

class Teacher {
  shouldTeach: number;
  constructor(shouldTeach: number) {
    this.shouldTeach = shouldTeach;
  }
  teach(student: Student): void {
    student.learn();
  }
  answear(student: Student): void {
    student.questionNumbers--;
  }
}

function initializeStudents(): Student[] {
  let studentArr: Student[] = [];
  studentArr.push(new Student('Peter', 10));
  studentArr.push(new Student('John', 6));
  studentArr.push(new Student('Sarah', 3));
  return studentArr;
}

let students: Student[] = initializeStudents();
let teacher = new Teacher(15);

console.log(students);
console.log('---------------------');

students.forEach(function (actualStudent: Student): void {
  while (actualStudent.questionNumbers !== 0) {
    teacher.answear(actualStudent);
  }
  while (actualStudent.learnedThings !== teacher.shouldTeach) {
    teacher.teach(actualStudent);
  }
})

console.log(students);
