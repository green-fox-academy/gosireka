'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for (let j = 0; j <= canvas.height; j += 20) {
  drawsLine(0, j);
  drawsLine(canvas.width, j);
}

for(let i = 0; i <= canvas.width; i += 20) {
  drawsLine(i, 0);
  drawsLine(i, canvas.height);
}

function drawsLine(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height /2);
  ctx.stroke();
}

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

