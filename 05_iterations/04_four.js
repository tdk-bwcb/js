// forin

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple",
}

// forin ** -> objects

for (const key in myObject) {
    // console.log(key, "-", myObject[key]) // same for both
    // console.log(`${key} - ${myObject[key]}`)
}
// js - javascript
// cpp - c++
// rb - ruby
// swift - swift by apple


const myArr = ["drg", "seuf", "ugfi", "wss"]
for (const key in myArr) {
    // console.log(`${key} - ${myArr[key]}`)
}
// 0 - drg
// 1 - seuf
// 2 - ugfi
// 3 - wss
// keys of arrays are numbers by default (0 indexed)


// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States")
// map.set("FR", "France")
// map.set("IN", "India")

// for (const key in map) {
//     console.log(`${key} - ${map[key]}`)
// }
// -> no output
// maps are not iterable
// maps -> forof✅