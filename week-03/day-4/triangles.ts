'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let triangleSize: number = 50;
let maxTriangleNum: number = canvas.height / triangleSize;

function drawPyramid() {
  drawStraightLines();
  drawLeftLines();
  drawRightLines();
}


function drawStraightLines(): void {
  for (let i: number = 0; i < maxTriangleNum; i++) {
    drawLine([i * triangleSize / 2, canvas.height - i * triangleSize], [canvas.width - i * triangleSize / 2, canvas.height - i * triangleSize]);
  }
}

function drawLeftLines(): void {
  for (let k: number = 0; k < maxTriangleNum; k++) {
    drawLine([canvas.width / 2 + k * triangleSize / 2, k * triangleSize], [k * triangleSize, canvas.height]);
  }
}

function drawRightLines(): void {
  for (let l: number = 0; l < maxTriangleNum; l++) {
    drawLine([canvas.width / 2 - l * triangleSize / 2, l * triangleSize], [canvas.width - l * triangleSize, canvas.height])
  }
}


function drawLine(fromCoord: number[], toCoord: number[]) {
  ctx.beginPath();
  ctx.moveTo(fromCoord[0], fromCoord[1]);
  ctx.lineTo(toCoord[0], toCoord[1]);
  ctx.stroke();
}

drawPyramid();
