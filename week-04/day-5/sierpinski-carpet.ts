'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawSquare(x: number, y: number, size: number): void {
  ctx.fillRect(x, y, size, size);
}

function drawSquares(x: number, y: number, size: number): void {
  if (size <= 2) {
    return;
  } else {
    drawSquare(x, y, size);
    drawSquares(x - 2 / 3 * size, y - 2 / 3 * size, size / 3);
    drawSquares(x  + 1 / 3 * size, y - 2 / 3 * size, size / 3);
    drawSquares(x  + size + 1 / 3 * size, y - 2 / 3 * size, size / 3);
    drawSquares(x - 2 / 3 * size, y + 1 / 3 * size, size / 3);
    drawSquares(x  + size + 1 / 3 * size, y + 1 / 3 * size, size / 3);
    drawSquares(x - 2 / 3 * size, y + size + 1 / 3 * size, size / 3);
    drawSquares(x  + 1 / 3 * size, y + size + 1 / 3 * size, size / 3);
    drawSquares(x  + size + 1 / 3 * size, y + size + 1 / 3 * size, size / 3);
  }
}

drawSquares(canvas.width / 3, canvas.height / 3, canvas.width / 3);
