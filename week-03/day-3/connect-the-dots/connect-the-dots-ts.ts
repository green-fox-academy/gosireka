'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let firstArr = [[10, 10], [290,  10], [290, 290], [10, 290]];

let secondArr = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];

function connectDots (arr) {
  let lastIndex = arr.length - 1;
  for (let i = 0; i <= lastIndex; i++){
    if (i < lastIndex ){
      drawLine (arr[i], arr[i+1]);
    } else {
      drawLine (arr[lastIndex], arr[0]);
    }
  }
}

function drawLine (coord, nextCoord){
  ctx.beginPath();
  ctx.moveTo(coord[0], coord[1]);
  ctx.lineTo(nextCoord[0], nextCoord[1]);
  ctx.stroke();
}

connectDots(firstArr);
connectDots(secondArr);

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
