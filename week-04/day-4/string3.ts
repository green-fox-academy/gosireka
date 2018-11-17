
// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function addStars(word: string): string {
  if (word.indexOf('*') === -1) {
    return addStars(addStarAt(word, 1));
  } else if (word.charAt(word.length - 2) !== '*') {
    
    let nextStarIndex = word.lastIndexOf('*') + 2;
    return addStars(addStarAt(word, nextStarIndex));


  } else {
    return word;
  }
}

function addStarAt(word: string, position: number): string {
  return word.substr(0, position).concat('*').concat(word.substr(position));
}

console.log(addStars('nyuszi'));


