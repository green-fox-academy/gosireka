'use strict';

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

function correctQuote (wrongQuote) {
  let arr = wrongQuote.split(' ');
  arr[2] += ' always takes longer than';
  let correctQuote: string = arr.join(' ');
  return correctQuote;
}

quote = correctQuote(quote);

console.log(quote);
