'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

function gunCheck (queue) {
  let canEnter = [];
  for (let i = 0; i < queue.length; i++) {
   let actualPerson = queue[i];
   if (actualPerson.guns !== 0) {
     watchlist.push(actualPerson.name);
   } else {
     canEnter.push(actualPerson);
   }
  }
  return canEnter;
}

function alcoholCheck (enterList) {
  enterList.forEach(function (allowedPerson) {
    if (allowedPerson.alcohol > 0) {
      securityAlcoholLoot += allowedPerson.alcohol;
      allowedPerson.alcohol = 0;
    }
  })
}

function securityCheck(queue) {
  let enterList = gunCheck(queue);
  alcoholCheck(enterList);
  console.log (enterList);
}

securityCheck(queue);


// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival
