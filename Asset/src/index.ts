console.log("Hello, TypeScript with Node.js!");
let x:number | string = 10;
x = 'hello';
x = 5;
if (typeof x === 'string') {
   console.log('x is a string');
}else if (typeof x === 'number') {
   console.log('x is a number');
}else {
   console.log('x is neither a string nor a number');
}

let i = 0
i = 'hello' as any
console.log(i);
import add, { subtract } from from '/function-transfer-test.ts';
const result = add(1,2) + 0;
console.log(result, 'type of result:', typeof result);

