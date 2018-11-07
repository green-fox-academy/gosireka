'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let givenNumber = 4;

let colors = ['green', 'blue', 'red', 'pink' ];


function drawRectangles(x, y, num) {
  ctx.fillStyle = colors[num];
  ctx.fillRect(x, y, 10 + 10 * num, 10 + 10 * num);
}

for (let j = 0; j < givenNumber; j++) {
  drawRectangles(50 + j * 50, 50, j);
}

// Draw four different size and color rectangles.
// Avoid code duplication.
