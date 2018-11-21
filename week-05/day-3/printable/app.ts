import { Domino } from './domino';
import { Thing } from './thing';

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

for (let domino of dominoes) {
  domino.printAllFields();
}

let things: Thing[] = initializeThing();

function initializeThing(): Thing[] {
  return [
    new Thing('Get milk', true),
    new Thing('Remove the obstacles', true),
    new Thing('Stand up', false),
    new Thing('Eat lunch', false)
  ];
}

for (let thing of things) {
  thing.printAllFields();
}
