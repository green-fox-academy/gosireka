
export { };
const fs = require('fs');

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

let fileContent = 'Reka Santha-Gosi';

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function writeToFile(fileName: string, data: string) {
  const contains = readFromFile(fileName);
  if (contains !== null) {
    fs.writeFileSync(fileName, data);
  } else {
    console.log('Unable to write file: ' + fileName);
  }
}

writeToFile('my-file.txt', fileContent);
