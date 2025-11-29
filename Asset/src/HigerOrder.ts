const n = [1, 2, 3, 4, 5,6,7,8,9,10];
const even = n.filter((num) => num % 3 === 0);
for (const index in even) {
    let Multiply = 0;
  Multiply = even[index] as any ** 3;
    console.log(Multiply);
}
console.log(even);
