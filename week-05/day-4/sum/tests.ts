import { test } from 'tape';
import { Integers } from './sum';

test('check sum', t => {
  const integers = new Integers();
  const listOfIntegers = [1, 2, 5, 2];

  t.equal(integers.sum(listOfIntegers), 10);
  t.equal(integers.sum([]), 0);
  t.equal(integers.sum([2]), 2);
  t.equal(integers.sum([2, 10, 2, 3, 1, 1, 1, 1]), 21);
  t.equal(integers.sum(null), 0);
  t.equal(integers.sum(undefined), 0);
  t.end();

})
