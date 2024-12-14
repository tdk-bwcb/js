// high order array loops



// for of

const arr = [1,2,3,4,5]

// for (const element of object) {
    
// }

for (const element of arr) {
    // console.log(element)
}
// 1
// 2
// 3
// 4
// 5


const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet)
}
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d
// !



// Maps
// unique 
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States")
map.set("FR", "France")
map.set("IN", "India")
// map.set("USA", "uifbue ioef ")

// console.log(map) // unique only
// -> Map(3) { 'IN' => 'India', 'USA' => 'United States', 'FR' => 'France' }
// -> Map(3) { 'IN' => 'India', 'USA' => 'uifbue ioef ', 'FR' => 'France' } // -> last updated


for(const key of map){
    // console.log(key)
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States' ]
// [ 'FR', 'France' ]

for(const [key, value] of map){
    // console.log(key, ":-", value)
} 
// IN :- India
// USA :- United States
// FR :- France


const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spider Man',
}
// for (const [key, value] of myObj) { // -> error
// for(const element of myObj) { // -> error
// for(const [element] of myObj) { // -> error
//     console.log(key, " ", value)
// }
// Object is not iterable by forof