export { };
const fs = require('fs');

// Create a method that decrypts reversed-lines.txt

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function reverseLines(fileName: string): string {
  const fileContent: string = readFromFile(fileName);
  let lines: string[] = fileContent.split('\n');
  let newString: string = '';
  if (readFromFile(fileName) === null) {
    console.log("Read from file was not successful");
  } else {
    for (let i: number = 0; i < lines.length; i++) {
      for (let j: number = lines[i].length - 1; j >= 0; j--) {
        newString = newString.concat(lines[i].charAt(j));
      }
      newString = newString.concat('\n');
    }
    return newString;
  }
  
}

console.log(reverseLines('reversed-lines.txt'));
