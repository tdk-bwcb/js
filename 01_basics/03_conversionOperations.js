let score = 33
// console.log(typeof score) // -> number

let score1 = "33"
// console.log(typeof score1) // -> string

let valueInNumber = Number(score1)
// console.log(typeof valueInNumber) // -> number
// console.log(valueInNumber)


let score2 = "33gsh"
// console.log(typeof score2) // -> string
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2) // -> number
// console.log(valueInNumber2) // -> NaN (Not a NUmber)

let score3 = null
// console.log(typeof score3) // -> object
let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3) // -> number
// console.log(valueInNumber3) // -> 0

let score4 =  undefined
// console.log(typeof score4) // -> undefined
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4) // -> number
// console.log(valueInNumber4) // -> NaN (Not a NUmber)



// "33" => 33
// "33bas" => NaN
// true => 1, false => 0


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // -> true(isLoggedIn = 1, "nonEmptyString") false(isLoggedIn = 0, "")


let someNum = 33
let stringNumber = String(someNum)
// console.log(stringNumber) // -> 33
// console.log(typeof stringNumber) // -> string






// ***************************** Operations ****************************************

let value = 3
let negvalue = -value
// console.log(negvalue) // -> -3

let str1 = "hello"
let str2 = " hitesh"
str3 = str1 + str2
// console.log(str3) // -> hello hitesh

// console.log("1" + 2) // -> 12
// console.log("1" + "2") // -> 12
// console.log("1" + 2 + 2) // -> 122
// console.log(1 + 2 + "2") // -> 32 ***

// console.log(true) // -> true
// console.log(+true) // -> 1
// console.log(true+) // -> error
// console.log(+"") // -> 0 ***

let num1, num2, num3;
num1 = num2 = num3 = 21

let gameCounter = 100;
console.log(gameCounter++) // -> 100 **
console.log(++gameCounter) // -> 102 **
console.log(gameCounter) // -> 102 
let gameCounter1 = 100;
console.log(++gameCounter1) // -> 101
console.log(gameCounter1++) // -> 101 ** 
console.log(gameCounter1) // -> 102 