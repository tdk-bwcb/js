// immediately invoked function expressions

// to resolve problem of pollution due to global scope

// named iffe
(function chai () {
    console.log("DB connected")
})();
// **** this needs to be ended therefore -> ";"
// -> DB connected

// unnamed iffe
( () => {
    console.log("DB Connected 2")
} )();
// -> DB Connected 2

( (name) => {
    console.log(`yash gsuf ${name}`)
} )("kiljh");
// -> yash gsuf kiljh