export function areAnagrams(firstWord: string, secondWord: string): boolean {
  let firstNew: string = firstWord.toLowerCase().split('').sort().join('');
  let secondNew: string = secondWord.toLowerCase().split('').sort().join('');
  if (firstNew !== secondNew) {
    return false;
  } return true;
}
