// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeXtoY(phrase: string): string {
  if (phrase.indexOf('x') === -1) {
    return phrase;
  } else {
    return changeXtoY(phrase.replace('x', 'y'));
  }
}

console.log(changeXtoY('mexXix xxix'));
