export { };
const fs = require('fs');

// Create a method that decrypts reversed-order.txt

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function reverseOrder(fileName: string): string {
  const fileContent = readFromFile(fileName);
  let lines: string[] = fileContent.split('\n');
  let newLines: string[] = [];
  for (let i: number = lines.length - 1; i >= 0; i--) {
    newLines.push(lines[i]);
    newLines.push('\n');
  }
  return newLines.join('');
}

console.log(reverseOrder('reversed-order.txt'));
