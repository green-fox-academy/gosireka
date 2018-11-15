// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(base: number, n: number): number {
  let result = base;
  if (n === 0) {
    return 1;
  } else {
    result *= power(base, n - 1);
  }
  return result;
}

console.log(power(3, 3));
