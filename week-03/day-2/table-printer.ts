
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

//------Calculates the rows width------ 
let headTitles: string[] = ['Ingredient', 'Needs cooling', 'In stock'];
let maxFirst: number = calculateFirstWidth(ingredients);

function calculateFirstWidth(arr: any[]): number { 
  let namesLength: number[] = [];
  arr.forEach(function (ingredient: any): void {
    namesLength.push(ingredient.name.length);
  })
  return Math.max(...namesLength);
}

let maxSecondTitle: number = headTitles[1].length;
let maxThirdTitle: number = headTitles[2].length;

//------Draws horizontal separator-----
let plus: string = '+';
let minus: string = '-';
let verticalLine: string = '|';
let space: string = ' ';

function drawHorizontalSeparator(firstWidth: number, secondWidth: number, thirdWidth: number) {
  let firstSection: string = plus.concat(minus.repeat(firstWidth));
  let secondSection: string = plus.concat(minus.repeat(secondWidth));
  let thirdSection: string = plus.concat(minus.repeat(thirdWidth).concat(plus));
  let horizontalSeparator: string = firstSection.concat(secondSection).concat(thirdSection);
  console.log(horizontalSeparator);
}

//------Draws header of the table --------
function drawHeader(maxName: number, maxSecondTitle: number, maxThirdTitle: number) {
  drawHorizontalSeparator(maxName, maxSecondTitle, maxThirdTitle);
  let firstPart: string = verticalLine.concat(headTitles[0].concat(space.repeat(maxName - headTitles[0].length)));
  let secondPart: string = verticalLine.concat(headTitles[1]);
  let thirdPart: string = verticalLine.concat(headTitles[2]).concat(verticalLine);
  let fullHeaderRow: string = firstPart.concat(secondPart).concat(thirdPart);
  console.log(fullHeaderRow);
  drawHorizontalSeparator(maxName, maxSecondTitle, maxThirdTitle);
}

//------Draws table--------
function drawTable(ingredients: any): void {
  drawHeader(maxFirst, maxSecondTitle, maxThirdTitle);
  ingredients.forEach(function (ingredient) { 
    let coolingString: string = needsCoolingToString(ingredient);
    let firstTableRow: string = verticalLine.concat(ingredient.name).concat(space.repeat(maxFirst - (ingredient.name).length));
    let secondTableRow: string = verticalLine.concat(coolingString).concat(space.repeat(maxSecondTitle - coolingString.length));
    let inStock: string = inStockString(ingredient);
    let thirdTableRow: string = verticalLine.concat(inStock).concat(space.repeat(maxThirdTitle - inStock.length)).concat(verticalLine);
    console.log(firstTableRow.concat(secondTableRow).concat(thirdTableRow));
  })
  drawHorizontalSeparator(maxFirst, maxSecondTitle, maxThirdTitle);
}

//------Turns data to string---------
function needsCoolingToString(ingredient: any): string {
  return ingredient.needsCooling ? 'Yes' : 'No'; 
}

function inStockString(ingredient: any): string {
  if (ingredient.inStock === 0) {
    ingredient.inStock = '-';
  } else {
    ingredient.inStock = ingredient.inStock.toString();
  }
  return ingredient.inStock;
}

//-----Calls drawTable function -------
drawTable(ingredients);
