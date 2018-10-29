'use strict';

let lineCount: number = 4;
let asterisk: string = '*';
let space:  string =' ';
let addAsterisk: string = '**';

for (let i: number = 1; i <= lineCount; i++){
    console.log((space.repeat(lineCount-i) + asterisk));
    asterisk += addAsterisk;
}

// First try
/*
let space1: string = ' ';
let space2: string = space1 + space1;
let space3: string = space2 + space1;
let asterisk: string = ' ';

for (let i: number = 1; i <= lineCount; i++){
    if(i==1){
        asterisk += '*';
        console.log(space3 + asterisk);
    }else if (i==2){
        asterisk += '**';
        console.log(space2 + asterisk);
    }else if (i ==3){
        asterisk += '**';
        console.log(space1 + asterisk);
    }else{
        asterisk += '**';
        console.log(space1 + asterisk);
    }
}

*/
