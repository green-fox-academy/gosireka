import {Helicopter} from './vehicle';
import {Bird} from './animal';

let helicopter = new Helicopter('red', 'helicopter', 10);

let bird = new Bird('Sparrow');

console.log(bird.land());
console.log(helicopter.fly());
