
'use strict';

// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

//------Find out the rows width------ 
let namesLength = [];
let headTitles = ['Ingredient', 'Needs cooling', 'In stock'];

ingredients.forEach(function (ingredient) {
  let name: string = ingredient.name;
  namesLength.push(name.length);
})

let maxName = Math.max(...namesLength);
let maxSecondTitle = headTitles[1].length;
let maxThirdTitle = headTitles[2].length;

//------Draws horizontal separator-----

let horizontalSeparator: string;
let plus: string = '+';
let minus: string = '-';
let verticalLine: string = '|';
let space: string = ' ';

function drawHorizontalSeparator(firstWidth, secondWidth, thirdWidth) {
  let firstSection: string = plus.concat(minus.repeat(firstWidth));
  let secondSection: string = plus.concat(minus.repeat(secondWidth));
  let thirdSection: string = plus.concat(minus.repeat(thirdWidth).concat(plus));
  console.log(horizontalSeparator = firstSection.concat(secondSection).concat(thirdSection));
}

//------Draws header of the table --------
function drawHeader(maxName, maxSecondTitle, maxThirdTitle) {
  drawHorizontalSeparator(maxName, maxSecondTitle, maxThirdTitle);
  let firstPart= verticalLine.concat(headTitles[0].concat(space.repeat(maxName - headTitles[0].length)));
  let secondPart = verticalLine.concat(headTitles[1]);
  let thirdPart = verticalLine.concat(headTitles[2]).concat(verticalLine);
  let fullHeaderRow = firstPart + secondPart + thirdPart;
  console.log(fullHeaderRow);
  drawHorizontalSeparator(maxName, maxSecondTitle, maxThirdTitle);
}

//------Draws table--------
function drawTable (ingredients) {
  drawHeader(maxName, maxSecondTitle, maxThirdTitle);
  for (let i = 0; i < ingredients.length; i++) {
    let stringNeedsCooling: string = '';
    if(ingredients[i].needsCooling){
      stringNeedsCooling = 'Yes';
    } else {
      stringNeedsCooling = 'No';
    }
    let firstTableRow = verticalLine.concat(ingredients[i].name).concat(space.repeat(maxName - (ingredients[i].name).length));
    let secondTableRow = verticalLine.concat(stringNeedsCooling).concat(space.repeat(maxSecondTitle - stringNeedsCooling.length));
    if(ingredients[i].inStock === 0){
      ingredients[i].inStock = '-';
    } else {
      ingredients[i].inStock = ingredients[i].inStock.toString();
    }
    let thirdTableRow = verticalLine.concat(ingredients[i].inStock).concat(space.repeat(maxThirdTitle - ingredients[i].inStock.length)).concat(verticalLine);
    console.log(firstTableRow + secondTableRow + thirdTableRow);
  
  }
  drawHorizontalSeparator(maxName, maxSecondTitle, maxThirdTitle);
}

//-----Calls drawTable function -------
drawTable(ingredients);
