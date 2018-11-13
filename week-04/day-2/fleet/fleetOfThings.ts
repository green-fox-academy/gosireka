import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();
let things: Thing[] = initializeThing();

for (let i: number = 0; i < things.length; i++) {
  fleet.add(things[i]);
  if (i >= 2) {
    things[i].complete();
  }
}

function initializeThing(): Thing[] {
  return [
    new Thing('Get milk'),
    new Thing('Remove the obstacles'),
    new Thing('Stand up'),
    new Thing('Eat lunch')
  ];
}

//console.log(things);

let lines = [];

function createLines() {

  fleet.things.forEach(function (thing) {
    if (thing.getIsCompleted()) {
      lines.push('[x] ' + thing.getName());
    } else {
      lines.push('[ ] ' + thing.getName());
    }
  })
  return lines;
}

function print() {
  let arr = createLines();
  for (let i: number = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}.`.concat(arr[i]);
  }
  return arr;
}

console.log(print());


/* Create a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */
