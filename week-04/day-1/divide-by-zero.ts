export { };
const fs = require('fs');

function divideTenWithNum(a: number): number {
  if (a === 0) {
    throw new Error('fail');
  }
  return a / 10;
}

try {
  console.log(divideTenWithNum(0));
} catch (e) {
  console.log(e.message);
}

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
