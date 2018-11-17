'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawSquare(x: number, y: number, size: number, lineWidth: number): void {
  ctx.lineWidth = lineWidth;
  ctx.strokeRect(x, y, size, size);
}

function drawSquares(x: number, y: number, size: number, lineWidth: number): void {
  if (size <= 20) {
    return;
  } else {
    drawSquare(x, y, size, lineWidth);
    drawSquares(x - size / 4, y - size / 4, size / 2, lineWidth / 2);
    drawSquares(x + size / 4 * 3, y - size / 4, size / 2, lineWidth / 2);
    drawSquares(x - size / 4, y + size / 4 * 3, size / 2, lineWidth / 2);
    drawSquares(x + size / 4 * 3, y + size / 4 * 3, size / 2, lineWidth / 2);
  }
}

drawSquares(canvas.width / 4, canvas.height / 4, canvas.width / 2, 20);
