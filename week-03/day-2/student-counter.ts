'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

function sumCandies(studentList: any[]): number {
  let sumOfCandies: number = 0;
  for (let i: number = 0; i < studentList.length; i++) {
    sumOfCandies += studentList[i][i].candies;
  }
  return sumOfCandies;
}

function sumAge(studentList: any[]): number {
  let sumOfAge: number = 0;
  for (let i: number = 0; i < studentList.length; i++) {
    if (studentList[i].candies < 5) {
      sumOfAge += studentList[i].age;
    }
  }
  return sumOfAge;
}

console.log(sumCandies(students));
console.log(sumAge(students));

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies