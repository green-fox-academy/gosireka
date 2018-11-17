'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
//Compiled TypeScript

function drawTriangles(x: number, y: number, size: number) {
  if (size <= 5) {
    return;
  } else {
    drawTriangle(x, y, size);
    drawTriangles(x, y, size / 2);
    drawTriangles(x + size / 2, y, size / 2);
    drawTriangles(x + size / 4, y + size / 2, size / 2);
  }
}

function drawTriangle(x: number, y: number, size: number) {
  let aPoint: number[] = [x, y];
  let bPoint: number[] = [x + size, y];
  let cPoint: number[] = [x + size / 2, y + size];

  drawLine(aPoint, bPoint);
  drawLine(bPoint, cPoint);
  drawLine(cPoint, aPoint);
}

function drawLine(fromPoint, toPoint) {
  ctx.beginPath();
  ctx.moveTo(fromPoint[0], fromPoint[1]);
  ctx.lineTo(toPoint[0], toPoint[1]);
  ctx.stroke();
}

drawTriangles(0, 0, canvas.width);
