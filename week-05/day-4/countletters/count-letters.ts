export function countLetters(word: string): object {
  let letters: string[] = word.toLowerCase().split('');
  let dictionary = {};
  for (let i: number = 0; i < word.length; i++) {
    if (letters[i] in dictionary) {
      dictionary[letters[i]]++;
    } else if (letters[i] !== ' '){
      dictionary[letters[i]] = 1;
    }
  }
  return dictionary;
}

console.log(countLetters('fekete elem'));
