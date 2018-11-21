import { Domino } from './domino';
import { Thing } from './thing';

export interface Comparable {
  compareTo(other: Comparable): number;
}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b);
});

let things: Thing[] = initializeThing();

function initializeThing(): Thing[] {
  return [
    new Thing('Get milk', true),
    new Thing('Remove the obstacles', false),
    new Thing('Stand up', true),
    new Thing('Eat lunch', false)
  ];
}

things.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
})
