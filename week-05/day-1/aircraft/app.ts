import { AircraftCarrier } from './carrier';
import { F16 } from './aircraft';
import { F35 } from './aircraft';

let blackCarrier = new AircraftCarrier(1000, 100);
let whiteCarrier = new AircraftCarrier(1000, 100);

blackCarrier.add(new F16());
blackCarrier.add(new F35());
blackCarrier.add(new F16());

whiteCarrier.add(new F35());
whiteCarrier.add(new F16());
whiteCarrier.add(new F35());

console.log(whiteCarrier.getStatus());

try {
  whiteCarrier.fill();
  blackCarrier.fill();
} catch (e) {
  console.log(e);
}

console.log(whiteCarrier.getStatus());

blackCarrier.fight(whiteCarrier);

console.log(whiteCarrier.getStatus());
