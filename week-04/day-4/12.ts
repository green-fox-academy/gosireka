'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawBigSquare(x: number, y: number, size: number) {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(x, y, size, size);
}

function drawOneSquare(x: number, y: number, size: number) {
  ctx.strokeRect(x, y, size, size);
}

function drawFourSquares(x: number, y: number, size: number) {
  drawOneSquare(x + size, y, size);
  drawOneSquare(x, y + size, size);
  drawOneSquare(x + size + size, y + size, size);
  drawOneSquare(x + size, y + size + size, size);
  if (size <= 5) {
    return;
  } else {
    drawFourSquares(x + size, y, size / 3);
    drawFourSquares(x, y + size, size / 3);
    drawFourSquares(x + size + size, y + size, size / 3);
    drawFourSquares(x + size, y + size + size, size / 3);
  }

}

drawBigSquare(0, 0, canvas.width);

drawFourSquares(0, 0, canvas.width / 3);
