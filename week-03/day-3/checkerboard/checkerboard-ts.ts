'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


for (let j = 0; j < canvas.height / 50; j++) {
  if(j % 2 === 0){
    drawLine(0, j);
  } else {
    drawLine(50, j);
  }
}
  
function drawLine(firstX, row){
  for (let i = 0; i < canvas.width / 50; i++) {
    ctx.fillRect(firstX + i * 100, 0 + row * 50, 50, 50);
  }
}

// Fill the canvas with a checkerboard pattern.
