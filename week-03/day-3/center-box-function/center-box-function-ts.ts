'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let givenNumber = 3;

for (let i = 0; i < givenNumber; i++){
  drawsSquare(40 * i + 10);
}

function drawsSquare(size) {
  ctx.strokeRect((canvas.width - size) / 2, (canvas.height - size) / 2, size, size);
}

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
