'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let givenNum = 7;

for (let i = 0; i < givenNum; i++) {
  drawsColorSquares(200 - 30 * i, colors[i]);
}

function drawsColorSquares(size, color) {
  ctx.fillStyle = color;
  ctx.fillRect((canvas.width - size) / 2, (canvas.height - size) / 2, size, size);

}

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
