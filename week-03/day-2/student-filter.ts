'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function moreCandies(studentList) {
  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    if (student.candies > 4) {
      console.log(student.name);
    }
  }
}

moreCandies(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function averageCandies (studentList) {
  let sumCandies = 0;
  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    sumCandies += student.candies;
  }
  return sumCandies / studentList.length;
}

console.log(averageCandies(students));
