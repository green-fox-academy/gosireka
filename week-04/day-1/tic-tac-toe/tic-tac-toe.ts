export { };
const fs = require('fs');

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function checkWinner(lines: string[], columns: string[], diagonals: string[]): string {
  for (let i: number = 0; i < lines.length; i++) {
    if (lines[i].indexOf('O') === -1 || columns[i].indexOf('O') === -1 || diagonals[i].indexOf('O') === -1) {
      return 'X';
    } else if (lines[i].indexOf('X') === -1 || columns[i].indexOf('X') === -1 || diagonals[i].indexOf('X') === -1) {
      return 'O';
    } else {
      return 'Draw';
    }
  }
}

function ticTacResult(fileName: string): string {
  const fileContent: string = readFromFile(fileName);
  let lines: string[] = fileContent.split('\n');
  let firstCoulmn: string = lines[0].charAt(0).concat(lines[1].charAt(0)).concat(lines[2].charAt(0));
  let secondColumn: string = lines[0].charAt(1).concat(lines[1].charAt(1)).concat(lines[2].charAt(1));
  let thirdColumn: string = lines[0].charAt(2).concat(lines[1].charAt(2)).concat(lines[2].charAt(2));
  let columns: string[] = [firstCoulmn, secondColumn, thirdColumn];
  let firstDiagonal: string = lines[0].charAt(0).concat(lines[1].charAt(1).concat(lines[2].charAt(2)));
  let secondDiagonal: string = lines[0].charAt(2).concat(lines[1].charAt(1).concat(lines[2].charAt(0)));
  let diagonals: string[] = [firstDiagonal, secondDiagonal];

  if (fileContent === null) {
    console.log('File-reading was not successful!');
    return null;
  } else {
    return checkWinner(lines, columns, diagonals);
  }
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"