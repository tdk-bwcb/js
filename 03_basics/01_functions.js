

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName()
// -> 
// H
// I
// T
// E
// S
// H

function add2Nos(num1, num2){
    // console.log(num1 + num2);
    let result = num1 + num2
    return result
}
// add2Nos(3,4) // -> 7
// add2Nos(34,"098") // -> 34098
// add2Nos(null, undefined) // -> NaN
const result = add2Nos(34,46)
// console.log(result) // -> 80


function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter username");
        return
    }
    // if(!username) // same
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh")) // -> hitesh just logged in

// console.log(loginUserMessage()) 
// -> undefined just logged in
// Please enter username

function loginUserMessage1(username = "default"){
    if(username == undefined){
        console.log("Please enter username");
        return
    }
    // if(!username) // same
    return `${username} just logged in`
}
// console.log(loginUserMessage1("qwerty")) // -> qwerty just logged in
// console.log(loginUserMessage1()) // -> default just logged in


function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(27854)) // -> 27854

function calculateCartPrice1(...num12){
    return num12
} 
// console.log(calculateCartPrice1(27, 78, 43)) // -> [ 27, 78, 43 ]


function calc12(val1, val2, ...num12){
    return num12
} 
// console.log(calc12(23,45,67,34,3,35,7)) // -> [ 67, 34, 3, 35, 7 ] // all except first2 values

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user) // -> Username is hitesh and price is 199

handleObject({
    username : "hitesh",
    price : 199
}) 
// -> Username is hitesh and price is 199
