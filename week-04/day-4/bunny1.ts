// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function earCount(n: number): number {
  let sumEars = 0;
  if (n === 0) {
    return 0;
  } else {
    sumEars += 2 + earCount(n - 1);
  }
  return sumEars;
}

console.log(earCount(3));
