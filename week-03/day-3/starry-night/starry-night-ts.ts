
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.fillRect(0, 0, canvas.width, canvas.height);

let starNum: number = 150;

for (let i: number = 0; i < starNum; i++) {
  let x: number = Math.floor(Math.random() * canvas.width);
  let y: number = Math.floor(Math.random() * canvas.height);
  let random: number = Math.floor(Math.random() * 256);
  let color: string = `rgb( ${random}, ${random}, ${random})`;
  drawStar(x, y, color);
}

function drawStar(x: number, y: number, color: string): void {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 3, 3);
}

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
