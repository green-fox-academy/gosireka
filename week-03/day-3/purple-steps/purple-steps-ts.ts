'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for(let i = 0; i < canvas.height / 10; i++ ){
  drawPurpleSquares(i * 10, i * 10);
}

function drawPurpleSquares(x, y) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 10, 10);
}

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
