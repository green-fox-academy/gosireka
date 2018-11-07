'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 250);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(250, 250);
ctx.strokeStyle = 'blue';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(250, 100);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 100);
ctx.lineTo(100, 100);
ctx.strokeStyle = 'purple';
ctx.stroke();


// draw a box that has different colored lines on each edge.

