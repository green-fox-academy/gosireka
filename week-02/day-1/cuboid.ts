'use strict';

let a: number = 20;
let b: number = 16.5;
let c: number = 12.5;

let firstSideSurface = a * b;
let secondSideSurface = a * c;
let thirdSideSurface = b * c;

let totalSurface = (firstSideSurface + secondSideSurface + thirdSideSurface).toFixed(2);
let totalVolume = (a * b * c).toFixed(2);
console.log('Surface Area: ' + totalSurface);
console.log('Volume: ' + totalVolume);

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000