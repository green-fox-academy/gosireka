'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


for (let i: number = 0; i <= canvas.width / 2; i += 15) {
  drawLine([i, canvas.height / 2], [canvas.width / 2, canvas.height / 2 - i]);
  drawLine([canvas.width / 2, canvas.height / 2 - i], [canvas.width - i, canvas.height / 2]);
  drawLine([i, canvas.height / 2], [canvas.width / 2, canvas.height / 2 + i]);
  drawLine([canvas.width / 2, canvas.height / 2 + i], [canvas.width - i, canvas.height / 2]);

}


function drawLine(fromCoord: number[], toCoord: number[]): void {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(fromCoord[0], fromCoord[1]);
  ctx.lineTo(toCoord[0], toCoord[1]);
  ctx.stroke();
}
