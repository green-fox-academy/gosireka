
export function countLetters(word: string): object {
  let letters: string[] = word.toLowerCase().split('');
  let dictionary = {};
  letters.forEach((letter) =>{
    if (letter in dictionary) {
      dictionary[letter]++;
    } else if (letter !== ' '){
      dictionary[letter] = 1;
    }
  });
  return dictionary;
}

console.log(countLetters('fekete elem'));
