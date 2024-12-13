// if else

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    // console.log("Allow to buy") // -> Allow to buy
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in") // -> User logged in
}
