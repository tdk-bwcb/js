const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value") // -> hitesh50 value

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//-> Hello my name is hitesh and my repo count is 50

// declaring a string
const gameName = new String('hiteshhc')
// console.log(gameName) // -> [String: 'hiteshhc']
// console.log(gameName[0]) // -> h
// console.log(gameName.__proto__) // -> {}

// console.log(gameName.length) // -> 8
// console.log(gameName.toUpperCase()) // -> HITESHHC
// console.log(gameName.charAt(2)) // -> t
// console.log(gameName.indexOf('s')) // -> 4


const gameName1 = new String('hitesh-hc')
const newString = gameName1.substring(0,4); // cannot take -ve valuse : changes -ve -> 0
// console.log(newString) // -> hite     

const anotherString = gameName1.slice(-8,4)
// console.log(anotherString) // -> ite

const newStringOne = "   joirg   "
// console.log(newStringOne) // ->    joirg   
// console.log(newStringOne.trim()) // -> joirg

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-')) // -> https://hitesh.com/hitesh-choudhary        
// console.log(url.includes('hitesh')) // -> true

// console.log(gameName1.split('-')) // -> [ 'hitesh', 'hc' ]

