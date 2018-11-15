// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEarCounter(n: number) : number{
  let sumOfEars = 0;
  if (n === 0) {
    return 0;
  } else if (n % 2 !== 0){
    sumOfEars += 2 + bunnyEarCounter(n-1);
  } else {
    sumOfEars += 3 + bunnyEarCounter(n-1);
  }
  return sumOfEars;
}

console.log(bunnyEarCounter(4));
