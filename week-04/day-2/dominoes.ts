import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

function putInOrder(dominoes: Domino[]): Domino[] {
  for (let i: number = 1; i < dominoes.length; i++) {
    while (dominoes[i - 1].values[1] !== dominoes[i].values[0]) {
      dominoes.push(...dominoes.splice(i, 1));
    }
  }
  return dominoes;
}

putInOrder(dominoes);

function print(dominoes: Domino[]): void {
  dominoes.forEach(function (value: Domino) {
    console.log(value);
  });
}

print(dominoes);
