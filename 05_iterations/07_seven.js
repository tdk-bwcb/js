const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map( (num) => num + 10 )
// console.log(newNumbers) // -> [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// map -> for all elements
// filter -> only when condition satisfied

// chaining
// result is passed to next
const new1 = myNumbers
            .map( (num) => num*10 )
            .map( (num) => num + 1 )
// console.log(new1) // -> [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101 ]

// filtered chaining
const new11 = myNumbers
            .map( (num) => num*10 )
            .map( (num) => num + 1 )
            .filter( (num) => num > 48 )
// console.log(new11) // -> [ 51, 61, 71, 81, 91, 101 ]