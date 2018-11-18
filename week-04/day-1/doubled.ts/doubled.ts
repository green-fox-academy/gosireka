export { };
const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function decryptsFile(fileName: string): string {
  const fileContent: string = readFromFile(fileName);
  let newString: string = '';
  for (let i: number = 0; i < fileContent.length; i++) {
    if( i % 2 === 0){
      newString = newString.concat(fileContent.charAt(i));
    }
  }
  return newString;
}

console.log(decryptsFile('duplicated-chars.txt'));
