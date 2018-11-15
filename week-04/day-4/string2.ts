// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function removeX(word: string) {
  if (word.indexOf('x') === -1) {
    return word;
  } else {
    return removeX(word.replace('x', ''));
  }
}

console.log(removeX('Mexxrexek'));
