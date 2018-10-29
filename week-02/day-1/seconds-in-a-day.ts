'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let totalSecond: number = 86400;

let passedSeconds: number = currentSeconds + (currentMinutes * 60) + (currentHours * 60 * 60);

let remain: number = totalSecond - passedSeconds;

console.log('Remaining seconds: ' + remain);
