function addNumbersFromArray(numbers: number[]): number {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return  total;
}

console.log('Total' + addNumbersFromArray([10,20,30]));