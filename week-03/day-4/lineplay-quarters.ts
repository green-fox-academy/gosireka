'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let givenNumber: number = 4;
let divider: number = Math.sqrt(givenNumber);
let actualMaxWidth: number = canvas.width / divider;
let actualMaxHeight: number = canvas.height / divider;

function drawRow(rowIndex: number): void {
  for (let k: number = 0; k < divider; k++) {
    drawOnePart(k * actualMaxWidth, rowIndex * actualMaxHeight);
  }
}

function drawOnePart(beginXCoord: number, beginYCoord: number): void {
  for (let j: number = 0; j < actualMaxWidth; j += 15) {
    drawLine([beginXCoord + j, beginYCoord], [beginXCoord + actualMaxWidth, beginYCoord + j], 'purple');
    drawLine([beginXCoord, beginYCoord + j], [j + beginXCoord, actualMaxWidth + beginYCoord], 'green');
  }
}

function drawLine(fromCoord: number[], toCoord: number[], color: string) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(fromCoord[0], fromCoord[1]);
  ctx.lineTo(toCoord[0], toCoord[1]);
  ctx.stroke();
}

for (let k: number = 0; k < divider; k++) {
  drawRow(k);
}
