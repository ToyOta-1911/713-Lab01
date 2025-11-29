function addNumbersFromArray(numbers: number[]): number {
  let total = 0;
  for (const num of numbers) {
      if(total < num){
          total = num;
      }

  }
  return  total;
}

console.log('Max' + addNumbersFromArray([10,40,120,30,20,100]));