'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLine(fromPoint, toPoint): void {
  ctx.beginPath();
  ctx.moveTo(fromPoint[0], fromPoint[1]);
  ctx.lineTo(toPoint[0], toPoint[1]);
  ctx.stroke();
}

function innerRadiusFromOuterRadius(outerRadius: number): number {
  return Math.sqrt(3) / 2 * outerRadius;

}

function drawHexagon(x: number, y: number, size: number): void {
  let aPoint: number[] = [x, y];
  let bPoint: number[] = [x + size, y];
  let cPoint: number[] = [x + size + size / 2, y + innerRadiusFromOuterRadius(size)];
  let dPoint: number[] = [x + size, y + innerRadiusFromOuterRadius(size) + innerRadiusFromOuterRadius(size)];
  let ePoint: number[] = [x, y + innerRadiusFromOuterRadius(size) + innerRadiusFromOuterRadius(size)];
  let fPoint: number[] = [x - size / 2, y + innerRadiusFromOuterRadius(size)];

  drawLine(aPoint, bPoint);
  drawLine(bPoint, cPoint);
  drawLine(cPoint, dPoint);
  drawLine(dPoint, ePoint);
  drawLine(ePoint, fPoint);
  drawLine(fPoint, aPoint);
}

function drawHexagons(x: number, y: number, size: number) : void{
  if (size <= 2) {
    return;
  } else {
    drawHexagon(x, y, size);
    drawHexagons(x, y, size / 3);
    drawHexagons(x + size / 3 * 2, y, size / 3);
    drawHexagons(x + size, y + innerRadiusFromOuterRadius(size) / 3 * 2, size / 3);
    drawHexagons(x + size / 3 * 2, y + innerRadiusFromOuterRadius(size) / 3 * 4, size / 3);
    drawHexagons(x, y + innerRadiusFromOuterRadius(size) / 3 * 4, size / 3);
    drawHexagons(x - size / 3, y + innerRadiusFromOuterRadius(size) / 3 * 2, size / 3);
  }
}

drawHexagons(canvas.width / 4, 0, canvas.width / 2);
