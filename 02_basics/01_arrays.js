// array

const myArr = [0,1,2,3,4,5,6,7,8]
// resizable, zero indexed

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[1]) // -> 2

// Array methods

myArr.push(12)
// console.log(myArr) // -> [ 0, 1, 2, 3,  4, 5, 6, 7, 8, 12 ]
myArr.pop()
// console.log(myArr) // -> [ 0, 1, 2, 3,  4, 5, 6, 7, 8 ]
myArr.unshift(648) // adds element @start
// console.log(myArr) // -> [ 648, 0, 1, 2, 3,  4, 5, 6, 7, 8 ] 
myArr.shift() // removes element @start
// console.log(myArr) // -> [ 0, 1, 2, 3,  4, 5, 6, 7, 8 ]

// console.log(myArr.includes(9)) // -> false
// console.log(myArr.indexOf(4)) // -> 4

const newArr = myArr.join()
// console.log(myArr) // -> [ 0, 1, 2, 3,  4, 5, 6, 7, 8 ]
// console.log(newArr) // -> 0,1,2,3,4,5,6,7,8
// console.log(typeof newArr) // -> string

// slice, splice

// console.log("A ", myArr) // -> A [ 0, 1, 2, 3,  4, 5, 6, 7, 8 ]

const myn1 = myArr.slice(1,3) 
// console.log(myn1) // -> [ 1, 2 ]
// console.log("B ", myArr) // -> B [ 0, 1, 2, 3,  4, 5, 6, 7, 8 ]

const myn2 = myArr.splice(2,6)
// console.log("C ", myArr) // -> C  [ 0, 1, 8 ]
// console.log(myn2) // -> [ 2, 3, 4, 5, 6, 7 ]

