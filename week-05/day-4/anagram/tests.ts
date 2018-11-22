import { test } from 'tape';
import { areAnagrams } from './anagram';

test('check anagram', t => {
  t.equal(areAnagrams('abb', 'bab'), true);
  t.equal(areAnagrams('bbb', 'bab'), false);
  t.equal(areAnagrams('bbb', 'babb'), false);
  t.end();
})

test('check anagrams with capital letter', t =>{
  t.equal(areAnagrams('Test', 'test'), true);
  t.end();
})
