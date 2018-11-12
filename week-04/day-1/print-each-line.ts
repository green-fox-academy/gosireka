export { };
const fs = require('fs');

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('Unable to read file: ' + fileName);
    return null;
  }
}

function printEachLines(fileName:string) {
  const fileContent: string = readFromFile(fileName);
  if (fileContent !== null) {
    return fileContent.split('\n');
  }
  return fileContent;
}

console.log(printEachLines('myfile.txt'))

