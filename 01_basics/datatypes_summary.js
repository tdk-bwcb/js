// Primitive (Call by value) (changes in copy)
// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId) // -> false
// console.log(id) // -> Symbol(123)
// console.log(anotherId) // -> Symbol(123)

// const bigNumber = 89435438954364584n;
// console.log(typeof bigNumber) // -> bigint




// Reference (Non Primitive)
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof outsideTemp) // -> object
console.log(typeof myFunction) // -> function
console.log(typeof heros) // -> object
console.log(typeof myObj) // -> undefined **


// JavaScript is a dynamic language and not static, 
// which means that variables can hold values of different types during runtime. 
// Unlike languages such as Typescript or Java, 
// you don't need to declare the data type of a variable explicitly.