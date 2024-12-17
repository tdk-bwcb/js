// const promise1 = new Promise(function(resolve, reject){
//     // do an async task
//     setTimeout(function(){
//         console.log("Async task is complete")
//     },1000)
// })

// promise1.then(function(){
//     console.log("Promise consumed");
// })

// // -> Async task is complete





// const promise1 = new Promise(function(resolve, reject){
//     // do an async task
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("Promise consumed");
// })

// // -> Async task is complete
// // -> Promise consumed





// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async2 resolved")
// })

// // -> Async task2
// // -> Async2 resolved





// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email:"chai@example.com"})
//     },1000)
// })
// promise3.then(function(user){
//     // console.log(user) // -> { username: 'Chai', email: 'chai@example.com' }
// })





// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:"hitesh", password:"123"})      
//         } 
//         else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// // const username = promise4.then((user) => {
// //     console.log(user)
// //     return user.username
// // }) ❌
// // console.log(username) ❌
// promise4
// .then((user) => {
//     console.log(user)
//     return user.username
// })
// .then((username) => {
//     console.log(username);
    
// })
// .catch(function(error){
//     console.log(error)
// })  

// // -> ERROR: Something went wrong (error: true)

// // -> { username: 'hitesh', password: '123' } 
// // -> hitesh (error : false)

// .finally(() => console.log("Promise resolved / rejected"))

// // -> { username: 'hitesh', password: '123' }
// // -> hitesh
// // -> Promise resolved / rejected (error : false)

// // -> ERROR: Something went wrong (error: true)
// // -> Promise resolved / rejected (error : true)





// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR : JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromise5(){
//     // const response = await promise5
//     // console.log(response)
//     try {
//         const response = await promise5
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise5()

// // -> ERROR (error : true) // -> use try catch block to resolve this // -> ERROR : JS went wrong
// // -> { username: 'javascript', password: '123' } (error : false )





// async function getAllUsers(){
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // const data = response.json()
//     // console.log(data)
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response) // -> this works
//         // const data = response.json()
//         const data = await response.json() // -> since conversion takes time
//         console.log(data)
//     } catch (error) {
//         console.log("E :", error)
//     }
// }
// getAllUsers()
// // -> Promise { <pending> } (w/o try catch)
// // -> Promise { <pending> } (after try catch)
// // -> ✅

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E :", error)
//     }
// }
// getAllUsers()
// -> ✅





// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/hiteshchoudhary")
.then( (response) => {
    return response.json()
} )
.then( (data) => {
    console.log(data)
} )
.catch( (error) => console.log(error) )
// -> ✅