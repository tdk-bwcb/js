const score = 400
// console.log(score) // -> 400

const balance = new Number(100)
// console.log(balance) // -> [Number: 100]

// console.log(typeof balance.toString()); // -> string
// console.log(balance.toFixed(2)) // -> 100.00

const otherNum = 23.8596
// console.log(otherNum.toPrecision(4)) // -> 23.860(5) 24(2) 2e+1(1) 23.86(3)

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // -> 1,000,000
// console.log(hundreds.toLocaleString('en-IN')) // -> 10,00,000






// **************************** Maths *********************************
 
// console.log(Math) // -> Object [Math] {}
// console.log(Math.abs(-37856)) // -> 37856
// console.log(Math.round(4564.2424)) // -> 4564
// console.log(Math.ceil(37568.633)) // -> 37569
// console.log(Math.floor(63.454)) // -> 64

// console.log(Math.min(3,5,8,3,5,7,4)) // -> 3
// console.log(Math.max(3,5,8,3,5,7,4)) // -> 8

// console.log(Math.random()) // -> any value (0 - 1)
// console.log((Math.random()*10)+1) // -> (1 - 10.9999999999)
// console.log(Math.floor(Math.random()*10)+1) // -> (1 - 10 int)

const min = 10;
const max = 20;
// console.log((Math.floor(Math.random() * (max - min + 1))) + min); // -> min < int < max