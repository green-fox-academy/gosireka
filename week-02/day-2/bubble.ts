//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function compare(x: number, y: number) {
  return x - y;
}

function bubble(arr: number[]) {
  return arr.sort(compare);
}

function advancedBubble(arr: number[], isDesc: boolean) {
  if(isDesc) {
    return bubble(arr).reverse();
  }else {
    return bubble(arr);
  }
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
