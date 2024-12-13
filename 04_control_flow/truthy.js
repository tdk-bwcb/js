const userEmail = "h@hitesh@ai"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}
// -> Got user email (non empty string / [...] empty / nonEmpty array)
// -> Don't have user email ( "" )


// falsy values
// -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// rest all -> truthy values
// -> "0", "false", " ", [], {}, function(){} empty fxn


// check for empty array
const arr = [2,4,7,8]
if(arr.length === 0){
    console.log("Empty Array")
}

// check for empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty object")
}


// false == 0, "" == 0, "" == false


// Nullish Coalescing Operator (??) : null undefined
// for null safety check
let val1
val1 = 5 ?? 10
val1 = null ?? 18
val1 = undefined ?? 245
console.log(val1) // -> 5 -> 18 -> 245



// Terniary Operator
// condition ? true : false
const num = 10
num > 5 ? console.log("True") : console.log("False") // -> True