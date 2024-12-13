// const tinderUser = new Object() // Singleton obj

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 
// console.log(tinderUser) // -> { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary",
        }
    },
}

// console.log(regularUser)
// -> {
//     email: 'some@gmail.com',
//     fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// }

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 2 : "b"}

const obj3 = { obj1, obj2 }
// console.log(obj3) // -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '3': 'a' } }

const obj31 = Object.assign({}, obj1, obj2)
// console.log(obj31) // -> { '1': 'a', '2': 'b', '3': 'a' }

const obj32 = {...obj1, ...obj2}
// console.log(obj32) // -> { '1': 'a', '2': 'b', '3': 'a' }

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "h2@gmail.com"
    },
    {
        id : 3,
        email : "h3@gmail.com"
    },
]

// console.log(users[1]) // -> { id: 2, email: 'h2@gmail.com' }
// console.log(users[0].email) // -> h@gmail.com

// console.log(Object.keys(tinderUser)) // -> [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // -> [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser)) 
// // -> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // -> true