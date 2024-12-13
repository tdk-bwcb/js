// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const mySym0 = Symbol("key0")

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    mySym : "mykey1", // behaves as a string
    [mySym0] : "mykey0", // for symbol
    age : 19,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // -> hitesh@google.com
// console.log(JsUser["email"]) // -> hitesh@google.com
// console.log(JsUser["full name"]) // -> Hitesh Choudhary
// console.log(JsUser.mySym) // -> mykey1
// console.log(typeof JsUser.mySym) // -> string
// console.log(JsUser[mySym0]) // -> mykey0
// console.log(typeof JsUser[mySym0]) // -> string 
// // checks the type of the value, not the key

// console.log(JsUser)
// ->
// {
//     name: 'Hitesh',
//     'full name': 'Hitesh Choudhary',
//     mySym: 'mykey1',
//     age: 19,
//     location: 'Jaipur',
//     email: 'hitesh@google.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key0)]: 'mykey0'
//   }


JsUser.email = "hitesh@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh43546@gpt.com"
// console.log(JsUser.email) // -> hitesh@gpt.com

JsUser.greeting = function(){
    console.log("Hello JS user")
}
// console.log(JsUser.greeting) // -> [Function (anonymous)]
// console.log(JsUser.greeting()) // -> Hello JS user

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}
// console.log(JsUser.greeting()) // -> Hello JS user
// console.log(JsUser.greeting2()) // -> Hello JS user, Hitesh