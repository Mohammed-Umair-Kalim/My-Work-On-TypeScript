let a: number = 5;
let b: number = 2;
let c: number;

//Unary Operators: 
//Prefix & Postfix:

//   6  +  6  +  1  +  1  + 7 +  0  + 1  =  22 
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log("Unary Operators:",c);

// let d = 3 + 4 * 5; //23
// console.log(d)
// d++
// console.log(d) //24