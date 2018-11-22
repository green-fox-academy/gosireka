import { test } from 'tape';
import { Sharpie } from './sharpie';

test('tests sharpie use method with positive number', function (t: any): any {
  let sharpie1 = new Sharpie('red', 0.5);
  sharpie1.use(10);
  t.equal(sharpie1.inkAmount, 90);
  t.end();
});

test('tests sharpie use method with negative number', function (t: any): any {
  let sharpie1 = new Sharpie('red', 0.5);
  sharpie1.use(-5);
  t.equal(sharpie1.inkAmount, 100);
  t.end();
});

