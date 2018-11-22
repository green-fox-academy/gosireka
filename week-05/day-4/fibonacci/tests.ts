import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('check input type: integer positive number', t => {
  t.equal(fibonacci(3), 2);
  t.end();
})

test('check input type: integer negative', t => {
  t.equal(fibonacci(-2), 0);
  t.end();
})

test('check input type: not integer', t => {
  t.equal(fibonacci(3.2), 2);
  t.end();
})

test('check input type: null', t => {
  t.equal(fibonacci(null), 0);
  t.end();
})

test('check input type: undefined', t => {
  t.equal(fibonacci(undefined), 0);
  t.end();
})
