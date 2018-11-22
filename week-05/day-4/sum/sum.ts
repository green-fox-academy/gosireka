export class Integers {
  sum(numList: number[]): number {
    if (numList !== null && numList !== undefined) {
      let sum: number = 0;
      for (let i: number = 0; i < numList.length; i++) {
        sum += numList[i];
      }
      return sum;
    } else {
      return 0;
    }
  }
}
