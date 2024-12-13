const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage() 
// -> hitesh, Welcome to website
// -> {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//    }


user.username = "SAM"
// user.welcomeMessage() 
// -> SAM, Welcome to website
// -> {
//     username: 'SAM',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//    }

// console.log(this) // -> {}



function chai() {
    console.log(this)
}
// chai()
/* 
  <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
  } 
*/


function chai1() {
    username : "hitesh"
    console.log(this)
    console.log(this.username) // -> undefined
}
// chai1() // -> same as above


const chai2 = function () {
    let username = "hitesh"
    console.log(this.username) // -> undefined
}
// chai2()


const chai3 = () => {
    let username = "hitesh"
    console.log(this.username) // -> undefined
    console.log(this) // -> {}
}
// chai3() 


// arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
const addTwo = (num1, num2) => num1 + num2

// or
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(45,78)) // -> 123


const hfg = (n1, n2) => ({username : "hitedh"})
// console.log(hfg(34,67)) // -> { username: 'hitedh' }
 