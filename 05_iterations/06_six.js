const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    // console.log(item)
} )
// js
// ruby
// java
// python
// cpp


// const values = coding.forEach( (item) => {
//     console.log(item)
//     // return item
// } )
// // console.log(values) // -> udefined (w/o return)
// // console.log(values) // -> undefined (return item)
// // forEach cannot return values


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums) // -> [ 5, 6, 7, 8, 9, 10 ]
// filter -> returns elements satisfying condition

const newNums0 = myNums.filter( (num) => {
    // num > 4 // (since {} used, cannot return w/o mentioning "return") // -> []
    return num > 4
} )
// console.log(newNums0) // -> []
// console.log(newNums0) // -> [ 5, 6, 7, 8, 9, 10 ]


const newnums = []
myNums.forEach( (num) => {
    if(num > 4){
        newnums.push(num)
    }
} )
// console.log(newnums) // -> [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks = books.filter( (bk) => bk.genre == "History" )
// console.log(userbooks)
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
// ]

const books2000 = books.filter( (bk) => bk.publish >= 2000 )
// console.log(books2000)
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
// ]

const books2000H = books.filter( (bk) => bk.publish >= 1990 && bk.genre == "History" )
// console.log(books2000H)
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
// ]
