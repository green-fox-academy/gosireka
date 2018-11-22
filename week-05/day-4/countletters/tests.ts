import { test } from 'tape';
import {countLetters} from './count-letters';

test('check dictionary object with a string', t => {
  let expectedObject: object = {
    f : 1,
    e : 3,
    k : 1,
    t : 1
  }
  t.deepEqual(countLetters('fekete'), expectedObject);
  t.end();
})  

test ('check dictionary object with capital letter string', t => {
  let expectedObject: object = {
    f : 1,
    e : 3,
    k : 1,
    t : 1
  }
  t.deepEqual(countLetters('fEkeTe'), expectedObject);
  t.end();
})

test ('check dictionary with string with space', t =>{
  let expectedObject: object = {
    f : 1,
    e : 5,
    k : 1,
    t : 1,
    l : 1,
    m : 1
  }
  t.deepEqual(countLetters('fekete elem'), expectedObject);
  t.end();
})
