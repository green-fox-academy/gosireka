// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(n: number): number {
  let sum = 0;
  if (n / 10 < 1) {
    sum += n;
  } else {
    sum += n % 10;
    sum += sumDigits(Math.floor(n / 10));
  }
  return sum;
}

console.log(sumDigits(11235));
