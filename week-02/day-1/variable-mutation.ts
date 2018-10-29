'use strict';

let a: number = 3;
a +=10;
// make it bigger by 10

console.log(a);

let b: number = 100;
b -= 7;
// make it smaller by 7

console.log(b);

let c: number = 44;
c *= 2;
// double c's value

console.log(c);

let d: number = 125;
d /= 5;
// divide d's value by 5

console.log(d);

let e: number = 8;
e **= 3;
// what's the cube of e's value?

console.log(e);

let f1: number = 123;
let f2: number = 345;
let isF1Bigger: boolean = f1 > f2;

console.log(isF1Bigger);
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
let isDoubleBigger: boolean = g2 * 2 > g1;

console.log(isDoubleBigger);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let isDivisor: boolean = h % 11 == 0;

console.log(isDivisor);
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let higherAndSmaller: boolean = i1 > (i2 **2) && i1 < (i2**3);

console.log(higherAndSmaller);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let isDivisible: boolean = j % 3 == 0 || j % 5 ==0;

console.log(isDivisible);
// tell if j is divisible by 3 or 5 (as a boolean)

let k: string = 'Apple';
k = k + k + k + k; 
// fill the k variable with its content 4 times

console.log(k);