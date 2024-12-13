// global and local scope

if(1){
    // block scope
    let a = 10
    const b = 20
    var c = 30
    d = 40
}

// console.log(a) // -> error
// console.log(b) // -> error
// console.log(c) // -> 30 **
// console.log(d) // -> 40 **


let a1 = 20
if(1){
    let a1 = 3939
    // console.log(a1) // -> 3939
}
// console.log(a1) // -> 20 **



// ********* scope level and mini hosting ****************

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username) // -> hitesh
    }
    // console.log(website) // -> error parent cannot access child attributes

    two()
}
one()
// // -> hitesh



// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website) // -> error parent fxn cannot access child fxn attributes

//     // two()
// }
// one()
// -> no output



if(1){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        // console.log(username + website) // -> hitesh youtube
    }
    // console.log(website) // -> error
}
// console.log(username) // -> error
// -> hitesh youtube



// ++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++


// console.log(addone(53)) // -> 54 ✅ w/o error **
function addone(num){
    return num + 1
}
// console.log(addone(5)) // -> 6


// console.log(add2(25)) // -> error *****
const add2 = function(num){
    return num + 2
}
// console.log(add2(98)) // -> 100