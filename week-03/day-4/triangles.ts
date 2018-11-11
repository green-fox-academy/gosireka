'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let triangleSize: number = 50;
let maxTriangleNum: number = canvas.height / triangleSize;

function drawPyramid(): void {
  for (let i: number = 0; i < maxTriangleNum; i++) {
    drawHorizontalLines(i);
    drawLeftLines(i);
    drawRightLines(i);
  }
}

function drawHorizontalLines(i: number): void {
  drawLine([i * triangleSize / 2, canvas.height - i * triangleSize], [canvas.width - i * triangleSize / 2, canvas.height - i * triangleSize]);
}

function drawLeftLines(i: number): void {
  drawLine([canvas.width / 2 + i * triangleSize / 2, i * triangleSize], [i * triangleSize, canvas.height]);
}

function drawRightLines(i: number): void {
  drawLine([canvas.width / 2 - i * triangleSize / 2, i * triangleSize], [canvas.width - i * triangleSize, canvas.height]);
}

function drawLine(fromCoord: number[], toCoord: number[]): void {
  ctx.beginPath();
  ctx.moveTo(fromCoord[0], fromCoord[1]);
  ctx.lineTo(toCoord[0], toCoord[1]);
  ctx.stroke();
}

drawPyramid();
