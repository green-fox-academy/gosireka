
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let firstSize = 10;
let totalSize = 0;
let givenNumber = 7;

for (let i = 0; i < givenNumber; i++) {
  let actualSize = i * 1.5 * firstSize;
  drawsAscending(totalSize, actualSize);
  totalSize += actualSize;
}

function drawsAscending(x, size) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, x, size, size);
}

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]