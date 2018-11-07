
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let givenNumber = 3;

for (let i = 0; i < givenNumber; i++) {
  drawsSquare(50 + i * 100, 50);
}

function drawsSquare(x, y) {
  ctx.fillRect(x, y, 50, 50);
}

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.
