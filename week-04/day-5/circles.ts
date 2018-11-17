'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawCircle(x: number, y: number, radius: number) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
}

function drawCircles(x: number, y: number, radius: number) {
  if (radius <= 5) {
    return;
  } else {
    drawCircle(x, y, radius);
    drawCircles(x, y - radius / 2, radius / 2);
    drawCircles(x - radius * Math.sqrt(3) / 4, y + radius / 4, radius / 2);
    drawCircles(x + radius * Math.sqrt(3) / 4, y + radius / 4, radius / 2);
  }
}

drawCircles(canvas.width / 2, canvas.height / 2, canvas.width / 2);
