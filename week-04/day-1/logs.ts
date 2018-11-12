
export { };
const fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return null;
  }
}

function readAndSplitContent(fileName: string): string[][] {
  const fileContent: string = readFromFile(fileName);
  if (fileContent === null) {
    console.log('File read wasn\'t successful');
    return null;
  }
  let linesArr: string[] = fileContent.split('\n');
  let linesContent: string[][] = linesArr.map(function (line) {
    return line.split('   ');
  })
  return linesContent;
}

function ipAdress(fileName: string): string[] {
  let linesContent = readAndSplitContent(fileName);
  let ipArr: string[] = [];
  for (let i = 0; i < linesContent.length; i++) {
    let ip: string = linesContent[i][1];
    ipArr.push(ip);
  }
  let uniqIpArr: string[] = [];
  ipArr.forEach(function (ipAdress) {
    if (uniqIpArr.indexOf(ipAdress) === -1) {
      uniqIpArr.push(ipAdress);
    }
  })
  return uniqIpArr;
}

console.log(ipAdress('log.txt'));

function getPostRatio(fileName: string): number {
  let splittedArr = readAndSplitContent(fileName);
  let getPostArr: string[] = [];
  for (let i = 0; i < splittedArr.length; i++) {
    let getPost: string = splittedArr[i][2];
    getPostArr.push(getPost);
  }
  let postNumber: number = 0;
  let getNumber: number = 0;

  getPostArr.forEach(function (item) {
    if (item.indexOf('GET') !== -1) {
      getNumber++;
    } else {
      postNumber++;
    }
  })
  return getNumber / postNumber;

}

console.log(getPostRatio('log.txt'));
