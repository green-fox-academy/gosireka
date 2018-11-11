'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for (let i: number = 0; i <= canvas.width; i += 30) {
  drawLine([i, 0], [canvas.width, i], 'purple');
  drawLine([0, i], [i, canvas.height], 'green');
}

function drawLine(fromCoord: number[], toCoord: number[], color: string): void {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(fromCoord[0], fromCoord[1]);
  ctx.lineTo(toCoord[0], toCoord[1]);
  ctx.stroke();
}
