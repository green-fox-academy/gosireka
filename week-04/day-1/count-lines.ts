export { };
const fs = require('fs');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function countLines(fileName: string): number {
  const fileContent: string = readFromFile(fileName);
  if (fileContent === null) {
    return 0;
  }
  return fileContent.split('\n').length;
}

console.log(countLines('count.txt'));
