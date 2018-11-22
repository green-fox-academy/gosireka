export function fibonacci(index: number): number {
  let integerIndex : number = Math.round(index);
  if (integerIndex === 0 || index === null) {
    return 0;
  } else if(integerIndex < 0 || index === undefined ){
    return undefined;
  }else if (integerIndex === 1) {
    return 1;
  } else {
    return (fibonacci(integerIndex - 1) + fibonacci(integerIndex - 2));
  }
}
