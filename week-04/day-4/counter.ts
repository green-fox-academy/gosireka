// Write a recursive function that takes one parameter: n and counts down from n.

function countDownFromN(n: number) {
  if (n === 0) {
    return n;
  } else {
    console.log(n);
    return countDownFromN(n-1);
  }
}

console.log(countDownFromN(10));
