'use strict';
'use strict';

let lineCount: number = 4;
let star: string = '*';
let space: string = ' ';

for (let actualRow = 1; actualRow <= lineCount; actualRow++) {
    let spaceCount: number = lineCount - actualRow;
    let starCount: number = 1 + ((actualRow - 1) * 2);
    let row: string = space.repeat(spaceCount) + star.repeat(starCount);
    console.log(row);
}

/* My first solution: 

let lineCount: number = 4;
let asterisk: string = '*';
let space:  string = ' ';
let addAsterisk: string = '**';

for (let i: number = 1; i <= lineCount; i++) {
    console.log(space.repeat(lineCount-i) + asterisk);
    asterisk += addAsterisk;
}
*/
