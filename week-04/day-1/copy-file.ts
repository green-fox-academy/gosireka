export { };
const fs = require('fs');

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function copy(fromFileName: string, toFileName: string): boolean {
  const fileContent = readFromFile(fromFileName);
  if (fileContent === null) {
    return false;
  }
  fs.writeFileSync(toFileName, fileContent);
  return true;
}

console.log(copy('multiple-lines.txt', 'copied.txt'));
