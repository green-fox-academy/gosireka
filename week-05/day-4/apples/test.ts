import { test } from 'tape';
import { Apple } from './apples';

test('check string', t => {
  const apple = new Apple();
  t.equal(apple.getApple(), 'apple');
  t.end();
})
