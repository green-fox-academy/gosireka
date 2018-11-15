// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n: number): number {
  let sum: number = 0;
  if (n <= 1) {
    return n;
  } else {
    sum += n;
    sum += numberAdder(n - 1);
  }
  return sum;
}

console.log(numberAdder(4));
