import { test } from 'tape';
import { areAnagrams } from './anagram';

test('check anagram', t => {
  t.ok(areAnagrams('abb', 'bab'));
  t.notOk(areAnagrams('bbb', 'bab'));
  t.notOk(areAnagrams('bbb', 'babb'));
  t.end();
})

test('check anagrams with capital letter', t =>{
  t.ok(areAnagrams('Test', 'test'));
  t.end();
})
