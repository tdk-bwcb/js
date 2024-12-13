

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