'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(element => {
    let newElement = callback(element);
    output.push(newElement);
  });
  return output;
}

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => {
  let chars = word.split('');
  let newChars = [];
  chars.forEach((char, index) => {
    if (index % 2 === 0){
      newChars.push(char);
    }
  });
  return newChars.join('');
}

console.log(mapWith(words, removeSecondLetter));
